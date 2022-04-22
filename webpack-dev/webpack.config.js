const path = require('path');

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
    }
};