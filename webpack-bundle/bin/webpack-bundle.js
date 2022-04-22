#!/usr/bin/env node

const path = require('path');

// 1. 获取webpack配置
const config = require(path.resolve('webpack.config.js'));

// 2. 创建Compiler实例
const Compiler = require('../lib/Compiler');
const compiler = new Compiler(config);

// 3. 开始打包编译
compiler.run();