const path = require('path');
const CONFIG = require('../../config.js');
const fileName = require('../fileName.js');

module.exports = {
  entry: [
    CONFIG.SRC.JS.PATH + fileName(CONFIG.SRC.JS.NAME),
    CONFIG.SRC.JS.PATH + fileName(CONFIG.SRC.JS.TEST),
  ],
  output: {
    path: path.resolve(__dirname, CONFIG.DIST.JS.PATH)
  },
};
