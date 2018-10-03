var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');

module.exports = webpackMerge(common, {
    mode: 'development',
    devtool: 'inline-source-maps'
});