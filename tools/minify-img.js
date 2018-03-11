var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

// Build CSS from SCSS files
module.exports = function (paths) {
    return function minifyImg(){
      return gulp.src(paths.in + '**/*')
              .pipe(imagemin())
              .pipe(gulp.dest(paths.out + 'img/'))
    };
};
