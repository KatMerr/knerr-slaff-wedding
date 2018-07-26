var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var common = require('./webpack.common');

module.exports = webpackMerge(common, {
    mode: 'development',
    devtool: 'inline-source-maps'
});