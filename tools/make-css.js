var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

// Build CSS from SCSS files
module.exports = function (input, output) {
    return function makeCss(){
      return gulp.src(path.resolve(input, 'scss/*.scss'))
              .pipe(sass())
              .pipe(autoprefixer())
              .pipe(csso())
              .pipe(gulp.dest(path.resolve(output, 'css/')))
    };
};
