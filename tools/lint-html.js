
// Build CSS from SCSS files
module.exports = function () {
    return function lintHtml(){
      var gulp = require('gulp');
      var htmllint = require('gulp-htmllint');

      function htmllintReporter(filepath, issues) {
        if (issues.length > 0) {
          issues.forEach(function (issue) {
            console.log("[htmllint]", filepath, '[' + issue.line + ',' +  issue.column+ ']:', '(' + issue.code + ')', issue.msg);
          });
        }
      }

      return gulp.src('tools/debug/*.html')
                .pipe(htmllint({}, htmllintReporter))
    };


};
