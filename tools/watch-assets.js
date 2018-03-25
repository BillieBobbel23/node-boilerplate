var gulp = require('gulp');
var path = require('path');

// Watch assets folders
module.exports = function (input) {
   return function watchAssets(){

    gulp.watch(path.resolve(input, 'scss/**/*.scss'), ['make-css'])
    gulp.watch(path.resolve(input, 'img/**/*.*'), ['minify-img'])
  }
};
