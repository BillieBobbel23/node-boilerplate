const path = require('path');
const CONFIG = require('./config.js');

module.exports = {
  mode: 'production',
  entry: [
    path.resolve(__dirname, CONFIG.WEBPACK_BUNDLED_FILES[0]),
    path.resolve(__dirname, CONFIG.WEBPACK_BUNDLED_FILES[1])
  ],
  output: {
    filename: `${CONFIG.WEBPACK_BUNDLE_NAME}-test.js`,
    path: path.resolve(__dirname, '../dist/js/')
  }
};
