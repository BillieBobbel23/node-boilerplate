const path = require('path');
const merge = require('webpack-merge');
const uglify = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const SassPlugin = require('sass-webpack-plugin');

const common = require('./webpack.common.js');
const CONFIG = require('../config.js');

const scssPath = `${CONFIG.DIRECTORY_INPUT}scss/style.scss`;
const cssPath = `${CONFIG.DIRECTORY_OUTPUT}css/style-10.min.scss`;

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
    }),
    new SassPlugin(
      { "../src/scss/style.scss" : "../../../dist/css/style-10.min.css" },
      {
        sourceMap: true,
        sass: { outputStyle: 'compressed' },
        autoprefixer: true
      })
  ],
});
