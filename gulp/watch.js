const gulp  = require("gulp"),
      debug = require("gulp-debug"),

      use   = require("rekuire"),
      paths = use("paths");

gulp.task("watch-dev", function() {
    gulp.watch(paths.getPath("watch"), ["build-dev"]);
});
