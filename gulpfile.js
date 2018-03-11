var gulp = require('gulp');
var path = require('path');
var paths = {
  in: path.resolve(__dirname, "src/"),
  out: path.resolve(__dirname, "dist/"),
  debugIn: path.resolve(__dirname, "tools/debug/src/"),
  debugOut: path.resolve(__dirname, "tools/debug/dist/")
};
// Logger
require('gulp-stats')(gulp);

gulp.task("default", ['build']);

gulp.task('make-css', require('./tools/make-css')(paths.in, paths.out));
gulp.task('minify-img', require('./tools/minify-img')(paths.in, paths.out));
gulp.task('make-fonts', require('./tools/make-fonts')(paths.in, paths.out));

gulp.task("build", ['make-css', 'minify-img', 'make-fonts']);

gulp.task('lint-css', require('./tools/lint-css')(paths));
gulp.task('lint-html', require('./tools/lint-html')(paths));

gulp.task("lint", ['lint-html', 'lint-css']);

// Debug package
gulp.task('debug-css', require('./tools/make-css')(paths.debugIn, paths.debugOut));
gulp.task('debug-img', require('./tools/minify-img')(paths.debugIn, paths.debugOut));
gulp.task('debug-fonts', require('./tools/make-fonts')(paths.debugIn, paths.debugOut));
gulp.task("debug", ['debug-css','debug-img','debug-fonts']);
