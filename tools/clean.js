var gulp = require('gulp');
var path = require('path');
var del = require('del');

// Build CSS from SCSS files
module.exports = function (input) {
    return function cleanup(){
      del(path.resolve(input, '**')).then(paths => {
          console.log('Deleted files and folders:\n', paths.join('\n'));
      });
    };
};
