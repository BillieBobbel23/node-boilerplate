var gulp = require('gulp');
var path = require('path');
var paths = {
   in: process.argv[3] == '--i' ? path.resolve(__dirname, process.argv[4]) : path.resolve(__dirname, 'src/'),
   out: process.argv[5] == '--o' ? path.resolve(__dirname, process.argv[6]): path.resolve(__dirname, 'dist/')
};
// Logger
require('gulp-stats')(gulp);

// Build tasks
gulp.task('make-css', require('./tools/make-css')(paths.in, paths.out));
gulp.task('minify-img', require('./tools/minify-img')(paths.in, paths.out));
gulp.task('make-fonts', require('./tools/make-fonts')(paths.in, paths.out));
// Lint tasks
gulp.task('lint-css', require('./tools/lint-css')(paths.out));
gulp.task('lint-html', require('./tools/lint-html')(__dirname));
// Watch
gulp.task('watch', require('./tools/watch-assets')(paths.in));

// Combined tasks
gulp.task("default", ['build']);
gulp.task("build", ['make-css', 'minify-img', 'make-fonts']);
gulp.task("lint", ['lint-html', 'lint-css']);
