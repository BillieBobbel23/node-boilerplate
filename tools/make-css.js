var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

// Build CSS from SCSS files
module.exports = function () {
    return function makeCss(){
      return gulp.src('src/style/*.scss')
              .pipe(sass())
              .pipe(autoprefixer())
              .pipe(csso())
              .pipe(gulp.dest('dist/css/'))
    };
};
