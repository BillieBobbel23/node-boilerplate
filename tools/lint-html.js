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

      return gulp.src(path.join(input, '../*.html'))
                .pipe(htmllint({
                  rules: {
                    // DOM related
                    "doctype-first": true,
                    "doctype-html5": true,

                    "head-req-title": true,
                    "head-valid-content-model": true,
                    "href-style": "relative",
                    // SEO related
                    "title-max-len": 80,
                    "title-no-dup": true,
                    "html-req-lang": true,
                    "lang-style": true,
                    // A11Y
                    "focusable-tabindex-style": true,
                    "img-req-alt": true,
                  }
                }, htmllintReporter))
    };


};
