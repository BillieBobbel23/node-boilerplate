var gulp = require('gulp');

// Logger
require('gulp-stats')(gulp);

gulp.task("default", ['build']);

gulp.task('make-css', require('./tools/make-css')());
gulp.task('minify-img', require('./tools/minify-img')());
gulp.task('make-fonts', require('./tools/make-fonts')());

gulp.task("build", ['make-css', 'minify-img', 'make-fonts']);
//gulp.task("build-test")

gulp.task('lint-css', require('./tools/lint-css')());
//gulp.task('lint-html', require('./gulp-tasks/lint-html')());

gulp.task("lint", ['lint-css']);

//gulp.task("test", ['lint-css', 'lint-html']);
