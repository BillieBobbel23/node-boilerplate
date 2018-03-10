var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

// Build CSS from SCSS files
module.exports = function () {
    return function minifyImg(){
      return gulp.src('src/img/*')
              .pipe(imagemin())
              .pipe(gulp.dest('dist/img'))
    };
};
