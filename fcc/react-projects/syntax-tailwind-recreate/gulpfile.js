const gulp = require("gulp");
const fileinclude = require("gulp-file-include");

const paths = {
  scripts: {
    src: "./src",
    dest: "./build/",
  },
};

async function includeHTML() {
  return gulp
    .src([
      "./src/**/*.html",
      "!./src/pages/*.html", // ignore
      "./src/script.js",
    ])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest(paths.scripts.dest));
}

exports.default = includeHTML;
