const loaderUtils = require('loader-utils');

function fileLoader(source) {
    // 根据文件内容生成hash名
    const filename = loaderUtils.interpolateName(this, '[hash].[ext]', {
        content: source
    });
    // webpack生成文件的方法，将文件生成到输出目录
    this.emitFile(filename, source);
    return `module.exports = "${filename}"`;
}

fileLoader.raw = true; // 表示传入的source是二进制原始数据

module.exports = fileLoader;
