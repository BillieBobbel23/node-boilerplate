var gulp = require('gulp');
var path = require('path');
var htmllint = require('gulp-htmllint');

// Build CSS from SCSS files
module.exports = function (input) {
    return function lintHtml(){
      function htmllintReporter(filepath, issues) {
        if (issues.length > 0) {
          issues.forEach(function (issue) {
            console.log("[htmllint]", filepath, '[' + issue.line + ',' +  issue.column+ ']:', '(' + issue.code + ')', issue.msg);
          });
        }
      }

      return gulp.src(path.join(input, '*.html'))
                .pipe(htmllint({}, htmllintReporter))
    };


};
