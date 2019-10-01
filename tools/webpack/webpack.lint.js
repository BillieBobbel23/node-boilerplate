var path = require("path");
var ImageminPlugin = require("imagemin-webpack-plugin").default;
var CopyWebpackPlugin = require("copy-webpack-plugin");
var CONFIG = require("../../config.js");

module.exports = {
  module: {
    rules: [
      {
        test: /(htm|html|xhtml|hbs|handlebars|php|ejs)$/,
        loader: "htmllint-loader",
        exclude: /(node_modules)/,
        query: {
          config: "../../linters/.htmllintrc" // path to custom config file
          //   failOnError: false,
          //   failOnWarning: false
        }
      }
    ]
  }
};
