var path = require('path');
var webpack = require('webpack');
var node_module_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        app: path.resolve(__dirname, 'app/main.js'),
        // 当 React 作为一个 node 模块安装的时候，
        // 我们可以直接指向它，就比如 require('react')
        mobile: path.resolve(__dirname, 'mobile/main.js'),
        vendor: ['react']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js' // 注意我们使用了变量
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                // 这里再也不需通过任何第三方来加载
                exclude: [node_module_dir],
                loaders: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'all',
                    test: /react|angular|lodash/,
                    name: 'vendor'
                }
            }
        }
    }
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    // ]
};

module.exports = config;