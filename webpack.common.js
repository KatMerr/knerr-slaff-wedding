var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./client/src/index.js",
    output: {
        path: path.join(__dirname + "/client/public/assets"),
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: './client/public',
        port: process.env.PORT || 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env", "react", "stage-0"]
                    }
                }
            },{
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader', options: { postcss: {} } }
                ]
            }, {
                test: /\.less$/,
                exclude: /(node_modules)/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader', options: { postcss: {} } },
                    'less-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /(node_modules)|(source)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name]-[hash:8].[ext]'
                    }
                }
            }
        ]
    }
}