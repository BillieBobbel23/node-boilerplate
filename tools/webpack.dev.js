const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const CONFIG = require('../config.js');

module.exports = merge(common, {
  mode: 'development',
  dev_tool: 'inline-source-map',

  watch: true,
  output: {
    filename: `${CONFIG.WEBPACK_BUNDLE_NAME}-test.js`
  }
});
