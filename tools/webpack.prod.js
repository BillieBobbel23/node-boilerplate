const path = require('path');
const merge = require('webpack-merge');
const uglify = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const common = require('./webpack.common.js');
const CONFIG = require('../config.js');

module.exports = merge(common ,{
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    filename: `${CONFIG.WEBPACK_BUNDLE_NAME}.prod.js`,
  },
  plugins: [
    new uglify({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
