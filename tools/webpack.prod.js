const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const common = require("./webpack/webpack.common.js");
const css = require("./webpack/webpack.css.js");
const img = require("./webpack/webpack.img.js");
const font = require("./webpack/webpack.font.js");

const CONFIG = require("../config.js");
const fileName = require("./fileName.js");

module.exports = merge(common, css, img, font, {
  mode: "production",
  devtool: "cheap-source-map",
  output: {
    filename: fileName(CONFIG.BUNDLE.NAME, CONFIG.BUNDLE.EXT.PRD)
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
