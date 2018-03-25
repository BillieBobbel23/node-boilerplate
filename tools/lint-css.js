var gulp = require('gulp');
var path = require('path');
var csslint = require('gulp-csslint');
var stylestats = require('gulp-stylestats');

// Build CSS from SCSS files
module.exports = function (input) {
    return function lintCss(){
      return gulp.src(path.join(input, 'css/**/*.css'))
                .pipe(csslint())
                .pipe(csslint.formatter())
                .pipe(stylestats({
                  type: 'json',
                  output: false
                }));
    };
};
