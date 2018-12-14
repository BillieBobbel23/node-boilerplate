const path = require('path');
const CONFIG = require('../../config.js');
const fileName = require('../fileName.js');

module.exports = {
  entry: [
    CONFIG.SRC.ROOT + CONFIG.SRC.JS.PATH + fileName(CONFIG.SRC.JS.NAME),
    CONFIG.SRC.ROOT + CONFIG.SRC.JS.PATH + fileName(CONFIG.SRC.JS.NAME_TOO),
  ],
  output: {
    path: path.resolve(__dirname, CONFIG.DIST.ROOT + CONFIG.DIST.JS.PATH)
  },
};
