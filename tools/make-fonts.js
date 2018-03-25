var gulp = require('gulp');
var path = require('path');
var fontmin = require('gulp-fontmin');
var ttf2woff2 = require('gulp-ttf2woff2');

// Build CSS from SCSS files
module.exports = function (input, output) {
    return function makeFonts(){
      return gulp.src(path.resolve(input, 'fonts/**/*.ttf'))
                .pipe(fontmin({}))
                .pipe(ttf2woff2())
                .pipe(gulp.dest(path.resolve(output, 'fonts/')))
    };
};
