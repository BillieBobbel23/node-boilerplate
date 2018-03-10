
// Build CSS from SCSS files
module.exports = function () {
    return function makeFonts(){
      var gulp = require('gulp');
      var fontmin = require('gulp-fontmin');
      var ttf2woff2 = require('gulp-ttf2woff2');

      return gulp.src('src/fonts/*.ttf')
                .pipe(fontmin({}))
                .pipe(ttf2woff2())
                .pipe(gulp.dest('dist/fonts'));
    };
};
