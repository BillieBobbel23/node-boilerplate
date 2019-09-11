var path = require('path');
var ImageminPlugin = require('imagemin-webpack-plugin').default
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CONFIG = require('../../config.js');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([{
      from: CONFIG.SRC.ROOT + CONFIG.SRC.IMG.PATH,
      to:  path.resolve(__dirname, CONFIG.DIST.ROOT + CONFIG.DIST.IMG.PATH)
    }]),
    // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', // Disable during development
      pngquant: {
        quality: '95-100'
      }
    }),
  ]
}
