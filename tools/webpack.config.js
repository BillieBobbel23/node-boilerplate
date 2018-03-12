const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    path.resolve(__dirname, '../src/js/empty.js'),
    path.resolve(__dirname, '../src/js/not.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/js/')
  }
};
