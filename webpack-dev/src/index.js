require('./styles/global.less');

const avatar = require('./assets/images/180.png');
console.log("🚀 ~ file: index.js ~ line 4 ~ avatar", avatar)

const util = require('./common/util.js');

const o1 = null;
const o2 = {};
const n = 1; 
console.log('Hi');
console.log('util.isObject', util.isObject(o1), util.isObject(o2), util.isObject(n));

// 虚拟模块
const moduleFoo = require('module-foo');
console.log("🚀 ~ file: index.js ~ line 15 ~ moduleFoo", moduleFoo)