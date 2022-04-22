const mime = require('mime');

// urlLoader引用了file-loader
function urlLoader(source) {
    const size = source.length;
    
    const options = this.getOptions();
    // 大于限制的大小，直接返回图片链接
    if (size > options.limit) {
        return require('./file-loader').call(this, source);
    }
    // 返回base64
    return `module.exports = "data:${mime.getType(source)};base64,${source.toString('base64')}"`;
}

urlLoader.raw = true; // 表示传入的source是二进制原始数据

module.exports = urlLoader;