var CONFIG = require('./config.js');

var gulp = require('gulp');
var path = require('path');
var paths = {
   in: process.argv[3] == '--i' ? path.resolve(__dirname, process.argv[4]) : path.resolve(__dirname, CONFIG.DIRECTORY_INPUT),
   out: process.argv[5] == '--o' ? path.resolve(__dirname, process.argv[6]): path.resolve(__dirname, CONFIG.DIRECTORY_OUTPUT)
};

// Build tasks
// gulp.task('make-fonts', require('./make-fonts')(paths.in, paths.out));

// TODO: Keep linting?
gulp.task('lint-css', require('./linters/lint-css')(paths.out));
gulp.task('lint-html', require('./linters/lint-html')(__dirname));
gulp.task("lint", ['lint-html', 'lint-css']);
