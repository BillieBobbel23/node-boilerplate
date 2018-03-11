var gulp = require('gulp');
var fontmin = require('gulp-fontmin');
var ttf2woff2 = require('gulp-ttf2woff2');

// Build CSS from SCSS files
module.exports = function (paths) {
    return function makeFonts(){
      return gulp.src(paths.in + '**/*.ttf')
                .pipe(fontmin({}))
                .pipe(ttf2woff2())
                .pipe(gulp.dest(paths.out + 'fonts/'));
    };
};
