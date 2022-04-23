
class WatchPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        console.log('watch-plugin.js==================');
        compiler.hooks.watchRun.tap('watch-webpack-plugin', () => {
            console.log('watch-plugin.js watchRun==================');
        });
        compiler.hooks.watchClose.tap('watch-webpack-plugin', () => {
            console.log('watch-plugin.js watchClose==================');
        });
        compiler.hooks.compilation.tap('watch-webpack-plugin', () => {
            console.log('watch-plugin.js compilation==================');
        });
    }
}

module.exports = WatchPlugin;