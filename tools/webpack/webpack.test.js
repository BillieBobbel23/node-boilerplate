const path = require('path');
const merge = require('webpack-merge');
const uglify = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const CONFIG = require('../../config.js');
const common = require('./webpack.common.js');

module.exports = merge(common ,{
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    filename: `${CONFIG.BUNDLE.NAME}.${CONFIG.BUNDLE.EXT.TST}.js`,
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
});
