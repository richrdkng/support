const gulp     = require("gulp"),
      mkdir    = require("mkdirp"),
      remove   = require("del"),
      sequence = require("gulp-sequence"),
      debug    = require("gulp-debug"),

      use   = require("rekuire"),
      paths = use("paths");

use("gulp/build/markup");
use("gulp/build/scripts");
use("gulp/build/styles");

gulp.task("build::create-build-folder", function(cb) {
    mkdir(
        paths.getPath("build"),
        {},
        function() {
            cb();
        }
    );
});

gulp.task("build::delete-build-folder", function(cb) {
    remove(
        paths.getPath("build"),
        {
            force : true // remove files and folders outside of cwd
        }
    )
    .then(function() {
        cb();
    });
});

gulp.task("build::copy-build-dev", function() {
    return gulp
        .src(paths.getPath("build") + "/**/*.*")
        .pipe(gulp.dest(paths.getPath("dist")));
});

gulp.task(
    "build-dev",
    function(cb) {
        sequence(
            "clear",
            "build::create-build-folder",
            [
                "markup::build-dev",
                "scripts::build-dev",
                "styles::build-dev"
            ],
            "build::copy-build-dev",
            "build::delete-build-folder"
        )(cb);
    }
);
