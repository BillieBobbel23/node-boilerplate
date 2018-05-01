const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const CONFIG = require('./config.js');

module.exports = merge(common ,{
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    filename: `${CONFIG.WEBPACK_BUNDLE_NAME}-test.js`,
  }
});
