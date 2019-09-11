const path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var CONFIG = require("../../config.js");

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: CONFIG.SRC.ROOT + CONFIG.SRC.FONT.PATH,
        to: path.resolve(__dirname, CONFIG.DIST.ROOT + CONFIG.DIST.FONT.PATH)
      }
    ])
  ]
};
