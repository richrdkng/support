const gulp  = require("gulp"),
      debug = require("gulp-debug"),

      use   = require("rekuire"),
      paths = use("paths");

use("gulp/clear");
use("gulp/build");
use("gulp/watch");

// the default task is left here for quick testing purposes
gulp.task("default", [], function() {
    var dist = paths.getPath("dist");

    return gulp
        .src([
            dist + "/**/.*", // include . (dot) files and folders
            dist + "/**/*"
        ])
        .pipe(debug());
});
