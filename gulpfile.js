var gulp = require('gulp');
var path = require('path');
var paths = {
  in: path.resolve(__dirname, process.argv[4]),
   out: path.resolve(__dirname, process.argv[6]),
};
// Logger
require('gulp-stats')(gulp);

gulp.task("default", ['build']);

gulp.task('make-css', require('./tools/make-css')(paths.in, paths.out));
gulp.task('minify-img', require('./tools/minify-img')(paths.in, paths.out));
gulp.task('make-fonts', require('./tools/make-fonts')(paths.in, paths.out));

gulp.task("build", ['make-css', 'minify-img', 'make-fonts']);

gulp.task('lint-css', require('./tools/lint-css')(paths.out));
gulp.task('lint-html', require('./tools/lint-html')(__dirname));

gulp.task("lint", ['lint-html', 'lint-css']);
