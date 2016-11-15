const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin'); //单独输出一个文件

module.exports = {
    entry: './src/index.js',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel',
                include:path.resolve(__dirname,'src')
            }, //先进行转换
            {
                test: /\.css$/,
                loader:ExtractTextPlugin.extract('css?modules&minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
                include:path.resolve(__dirname,'src')
            } //使用css-loader 读取css 文件

        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
}