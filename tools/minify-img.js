var gulp = require('gulp');
var path = require('path');
var imagemin = require('gulp-imagemin');

// Build CSS from SCSS files
module.exports = function (input, output) {
    return function minifyImg(){
      return gulp.src(path.resolve(input, 'img/*'))
              .pipe(imagemin())
              .pipe(gulp.dest(path.resolve(output, 'img/')))
    };
};
