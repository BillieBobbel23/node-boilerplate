const path = require('path');
const webpack = require('webpack');
const SassPlugin = require('sass-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;

module.exports = {
  plugins: [
    new SassPlugin(
      {
        "../src/scss/style.scss"  : "../../dist/css/style.min.css"
      },
      {
      //  sourceMap: true,
    //    sass: { outputStyle: 'compressed' },
    //    autoprefixer: true
      }
    ),
    new CssoWebpackPlugin({debug: true}),
  ],
};
