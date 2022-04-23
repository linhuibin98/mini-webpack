const path = require('path');
const WatchPlugin = require('./plugin/watch-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const VirtualModulesPlugin = require('webpack-virtual-modules');

const virtualModules = new VirtualModulesPlugin({
  'node_modules/module-foo.js': 'module.exports = { foo: "foo" };',
  'node_modules/module-bar.js': 'module.exports = { bar: "bar" };'
});

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: './loader/console-loader',
                    options: {
                        config: {
                            a: 1
                        }
                    }
                }
            },
            {
                test: /\.png$/,
                use: [{
                    loader: './loader/url-loader',
                    options: {
                        limit: 20000
                    }
                }]
            },
            {
                test: /\.less$/,
                use: ['./loader/style-loader', './loader/css-loader', './loader/less-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './dist/index.html'
        }),
        new WatchPlugin(),
        virtualModules
    ]
};