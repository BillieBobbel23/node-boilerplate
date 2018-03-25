var gulp = require('gulp');
var path = require('path');
var paths = {
   in: process.argv[3] == '--i' ? path.resolve(__dirname, process.argv[4]) : path.resolve(__dirname, '../src/'),
   out: process.argv[5] == '--o' ? path.resolve(__dirname, process.argv[6]): path.resolve(__dirname, '../dist/')
};
// Logger
//require('gulp-stats')(gulp);

// Build tasks
gulp.task('make-css', require('./make-css')(paths.in, paths.out));
gulp.task('minify-img', require('./minify-img')(paths.in, paths.out));
gulp.task('make-fonts', require('./make-fonts')(paths.in, paths.out));
gulp.task('make-svg', require('./make-svg')(paths.in, paths.out));
// Lint tasks
gulp.task('lint-css', require('./lint-css')(paths.out));
gulp.task('lint-html', require('./lint-html')(__dirname));
// Watch
gulp.task('watch', require('./watch-assets')(paths.in));
// Cleanup
gulp.task("clean", require('./clean')(paths.out));

// Combined tasks
gulp.task("default", ['build']);
gulp.task("build", ['make-css', 'minify-img', 'make-fonts', 'make-svg']);
gulp.task("lint", ['lint-html', 'lint-css']);
