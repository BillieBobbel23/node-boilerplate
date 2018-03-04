var gulp = require('gulp');
var watch = require('gulp-watch');
// SCSS - CSS tools
var sass = require('gulp-sass');
var csso = require('gulp-csso');
// Font tools
var fontmin = require('gulp-fontmin');
var ttf2woff2 = require('gulp-ttf2woff2');
// Image tools
var imagemin = require('gulp-imagemin');
// Linters
var stats = require('gulp-stylestats');
var htmllint = require('gulp-htmllint');
var csslint = require('gulp-csslint');

gulp.task("default", ['build']);

// Build tasks
gulp.task("make-css", function(){
  return gulp.src('src/style/*.scss')
          .pipe(sass())
          .pipe(csso())
          .pipe(gulp.dest('dist/css/'))
});

gulp.task('make-fonts', function () {
    return gulp.src('src/fonts/*.ttf')
        .pipe(fontmin({}))
        .pipe(ttf2woff2())
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('minify-images', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task("build", ['make-css','make-fonts', 'minify-images']);
