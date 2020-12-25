const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
     devtool: 'inline-source-map',
    devServer: {
        liveReload: true,
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.js'
    },
      module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: ['file-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
         new CopyPlugin({
            patterns: [
                { from: "./src/picture", to: "picture" },
            ],
        }),
    ]    
}    