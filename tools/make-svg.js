var gulp = require('gulp');
var path = require('path');
var svgmin = require('gulp-svgmin');
var svgScaler = require('svg-scaler');

// Build CSS from SCSS files
module.exports = function (input, output) {
    return function makeFonts(){
      return gulp.src(path.resolve(input, 'svg/**/*.svg'))
                .pipe(svgScaler({}))
                .pipe(svgmin({}))
                .pipe(gulp.dest(path.resolve(output, 'svg/')))
    };
};
