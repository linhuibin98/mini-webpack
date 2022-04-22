
function styleLoader(source) {
    console.log('style-loader==================', source);
    return '';
}

styleLoader.pitch = function(remainingRequest) {
    // 通过!!跳过剩下的 loader, 相当于直接执行require('index.less')
    const path = JSON.stringify(this.utils.contextify(
        this.context || this.rootContext, 
        '!!' + remainingRequest
    ));
    console.log("🚀 ~ file: style-loader.js ~ line 14 ~ path", path);
    return `var style = document.createElement('style');
    style.innerHTML = require(${path});
    document.head.appendChild(style);`;
}

module.exports = styleLoader;