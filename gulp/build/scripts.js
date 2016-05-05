const gulp  = require("gulp"),
      merge = require("merge2"),
      debug = require("gulp-debug"),

      use   = require("rekuire"),
      paths = use("paths");

gulp.task("scripts::copy-dev", function() {
    var bower  = paths.getPath("bower"),
        vendor = paths.getPath("build") + "/js/vendor";

    return merge(
        // copy vendor scripts
        gulp.src([
                bower + "/requirejs/require.js",
                bower + "/jquery/dist/jquery.js",
                bower + "/bootstrap/dist/js/bootstrap.js"
            ])
            .pipe(gulp.dest(vendor))
        ,

        // copy own/custom scripts
        gulp.src(paths.getPath("assets") + "/scripts/**/*.js")
            .pipe(gulp.dest(paths.getPath("build") + "/js"))
    );
});

gulp.task("scripts::build-dev", [
    "scripts::copy-dev"
]);

paths.appendToPath("watch", paths.getPath("assets") + "/scripts/**/*.js");
