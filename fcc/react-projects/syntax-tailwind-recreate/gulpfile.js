const gulp = require("gulp");
const fileinclude = require("gulp-file-include");

const paths = {
  scripts: {
    src: "./src",
    dest: "./build/",
  },
};

async function copyImages() {
  return gulp.src("./static/img/**/*.png").pipe(gulp.dest("./build/img"));
}

async function copyFonts() {
  return gulp.src("./fonts/**/*.woff2").pipe(gulp.dest("./build/fonts"));
}

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

exports.default = gulp.series(includeHTML, copyImages, copyFonts);
