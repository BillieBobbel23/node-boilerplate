var gulp = require('gulp');
var path = require('path');

// Build CSS from SCSS files
module.exports = function (input) {
    return function watchAssets(){
        gulp.watch(path.resolve(input, 'scss/**/*.scss'), ['make-css'])
      };
};
