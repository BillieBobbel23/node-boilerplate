const CONFIG = require("../../config.js");
const SassPlugin = require("sass-webpack-plugin");
const CssoWebpackPlugin = require("csso-webpack-plugin").default;

var input = CONFIG.SRC.ROOT + CONFIG.SRC.SCSS.PATH + CONFIG.SRC.SCSS.NAME;

module.exports = {
  plugins: [
    new SassPlugin(
      {
        [input]: CONFIG.DIST.CSS.PATH + CONFIG.DIST.CSS.NAME
      },
      {
        sourceMap: true,
        sass: { outputStyle: "compressed" },
        autoprefixer: true
      }
    ),
    new CssoWebpackPlugin({ debug: true })
  ]
};
