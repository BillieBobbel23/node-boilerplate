
// Build CSS from SCSS files
module.exports = function () {
    return function lintCss(){
      var gulp = require('gulp');
      var csslint = require('gulp-csslint');
      var stylestats = require('gulp-stylestats');

      return gulp.src('./dist/css/*.css')
                .pipe(csslint())
                .pipe(csslint.formatter())
                .pipe(stylestats({
                //  type: 'json' ||
                }));
    };
};
