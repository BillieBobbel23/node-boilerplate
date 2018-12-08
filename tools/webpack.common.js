const path = require('path');
const CONFIG = require('../config.js');

module.exports = {
  entry: [
    path.resolve(__dirname, CONFIG.WEBPACK_BUNDLED_FILES[0]),
    path.resolve(__dirname, CONFIG.WEBPACK_BUNDLED_FILES[1])
  ],
  output: {
    path: path.resolve(__dirname, CONFIG.WEBPACK_OUTPUT)
  },
};
