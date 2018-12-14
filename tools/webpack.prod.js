const path = require('path');
const merge = require('webpack-merge');
const uglify = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const common = require('./webpack/webpack.common.js');
const css = require('./webpack/webpack.css.js');

const CONFIG = require('../config.js');
const fileName = require('./fileName.js');

module.exports = merge(common, css, {
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    filename: fileName(CONFIG.BUNDLE.NAME, CONFIG.BUNDLE.EXT.PRD),
  },
  plugins: [
    new uglify({ sourceMap: true }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })
  ],
});
