const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const types = require('@babel/types');
const slash = require('slash');
const ejs = require('ejs');

class Compiler {
    modules = {}; // 保存所有的modules，路径: code {'./src/index.js': 'var a = 1;'}
    assets = {}; // 保存打包后的输出文件路径映射, 路径: code { 'dist': 'var a = 1;' }
    constructor(config) {
        this.config = config;
        // 保存入口文件
        this.entryId = config.entry;
        // 需要通过绝对路径获取文件资源，需要获取到工作路径
        this.root = process.cwd();
    }
    // 获取模块内容，这里默认是文件系统 fs.readFile，也替换成内存/虚拟文件系统...
    getSource(modulePath) {
        const source = fs.readFileSync(modulePath, {
            encoding: 'utf8'
        });
        return source;
    }
    // 打包
    buildModuleSource(modulePath) {
        const source = this.getSource(modulePath);
        // 处理源码的内容
        // 获取基于src的相对目录
        // 模块ID  相对路径 = modulePath - this.root  ->  ./src/index.js
        const moduleName = slash('./' + path.relative(this.root, modulePath));
        const { sourceCode, dependencies } = this.parse(source, path.dirname(moduleName)) // ./src
        // 把相对路径和模块中的内容 对应起来的保存
        this.modules[moduleName] = sourceCode;
        /**
         * 递归获取模块依赖modules
         */
        if (dependencies && dependencies.length > 0) {
            dependencies.forEach(depPath => {
                this.buildModuleSource(depPath);
            });
        }
    }
    // 解析源码，babylon 转 ast，@babel/traverse 需要遍历到对应的节点，@babel/types 把遍历的节点替换，@babel/generator 需要把替换的结果生成
    // 对获取到的源码进行改造，把require换成之后自己实现的__webpack_require__，并生成入口文件的依赖，我们通过ast语法树进行源码修改
    parse(source, parentDir) {
        const ast = babylon.parse(source);
        const dependencies = []; // 当前模块依赖的模块, 存储的是相对路径 ./src/xxxx
        traverse(ast, {
            // 函数调用表达式，替换require为自己实现的__webpack_require__
            CallExpression(p) {
                const {node} = p;
                // 判断是否是require
                if (node.callee.name === 'require') {
                    node.callee.name = '__webpack_require__';  // 替换require
                    let moduleName = node.arguments[0].value; // 获取模块名称 ./common/util.js
                    moduleName = slash('./' + path.join(parentDir, moduleName)); // 修改成 ./src/common/util.js
                    dependencies.push(moduleName); // 把依赖放到数组中
                    node.arguments = [types.stringLiteral(moduleName)]; // 模块名称替换成 基于src的路径,方便之后通过this.root获取绝对位置
                }
            }
        });
        // 生成替换后的code
        const sourceCode = generator(ast).code;
        return {
            sourceCode,
            dependencies
        }
    }
    // 开始打包编译
    run() {
        // 1. 获取入口文件的内容，确定文件的依赖
        this.buildModuleSource(path.join(this.root, this.entryId));
        // 2. 发射打包后的文件
        this.emitFile();
    }

    emitFile() {
        // 打包输出路径
        const dist = path.join(this.config.output.path, this.config.output.filename);
        // 输出模板
        const templateStr = this.getSource(path.join(__dirname, 'main.ejs'));
        // 模板渲染
        const code = ejs.render(templateStr, {
            entryId: this.entryId,
            modules: this.modules
        });
        // 资源中，路径对应的代码
        this.assets[dist] = code;
        // 不存在目录，就先创建目录
        if (!fs.existsSync(this.config.output.path)){
            fs.mkdirSync(this.config.output.path);
        }
        // 输出文件
        fs.writeFileSync(dist, this.assets[dist], {
          flag: 'w', // 默认值 'w'表示覆盖写入不存在文件则会创建，'a+':a表追加内容，+表示不存在就先创建文件
        });
    }
}

module.exports = Compiler;