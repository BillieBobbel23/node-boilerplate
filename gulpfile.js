var gulp = require('gulp');
// Logger
require('gulp-stats')(gulp);

gulp.task("default", ['build']);

gulp.task('make-css', require('./gulp-tasks/make-css')());
gulp.task('minify-img', require('./gulp-tasks/minify-img')());
gulp.task('make-fonts', require('./gulp-tasks/make-fonts')());

gulp.task("build", ['make-css', 'minify-img', 'make-fonts']);

gulp.task('lint-css', require('./gulp-tasks/lint-css')());
//gulp.task('lint-html', require('./gulp-tasks/lint-html')());

gulp.task("lint", ['lint-css']);

//gulp.task("test", ['lint-css', 'lint-html']);
