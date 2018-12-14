const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack/webpack.common.js');
const css = require('./webpack/webpack.css.js');

const CONFIG = require('../config.js');
const fileName = require('./fileName.js');

module.exports = merge(common, css, {
  mode: 'development',
  dev_tool: 'inline-source-map',

  watch: true,
  output: {
    filename: fileName(CONFIG.BUNDLE.NAME, CONFIG.BUNDLE.EXT.DEV)
  }
});
