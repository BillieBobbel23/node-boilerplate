var gulp = require('gulp');
var path = require('path');
var paths = {
  in: "./src/",
  out: "./dist/",
  debug: "./tools/"
};


// Logger
require('gulp-stats')(gulp);

gulp.task("default", ['build']);

gulp.task('make-css', require('./tools/make-css')(paths));
gulp.task('minify-img', require('./tools/minify-img')(paths));
gulp.task('make-fonts', require('./tools/make-fonts')(paths));

gulp.task("build", ['make-css', 'minify-img', 'make-fonts']);
//gulp.task("build-test")

gulp.task('lint-css', require('./tools/lint-css')(paths));
gulp.task('lint-html', require('./tools/lint-html')(paths));

gulp.task("lint", ['lint-html', 'lint-css']);
