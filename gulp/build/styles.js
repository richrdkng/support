const gulp   = require("gulp"),
      merge  = require("merge2"),
      sass   = require("gulp-sass"),
      rename = require("gulp-rename"),
      debug  = require("gulp-debug"),

      use   = require("rekuire"),
      paths = use("paths");

gulp.task("styles::copy-vendor-dev", function() {
    var bootstrap = paths.getPath("bower") + "/bootstrap/dist";

    return merge(
        gulp.src([
                bootstrap + "/css/bootstrap.css",
                bootstrap + "/css/bootstrap-theme.css"
            ])
            .pipe(gulp.dest(paths.getPath("dist") + "/css"))
        ,
        gulp.src(bootstrap + "/fonts/*.*")
            .pipe(gulp.dest(paths.getPath("dist") + "/fonts"))
    );
});

gulp.task("styles::build-sass-dev", function() {
    return gulp
        .src(paths.getPath("assets") + "/styles/index.scss")
        .pipe(rename({
            basename : "style"
        }))
        .pipe(sass())
        .pipe(gulp.dest(paths.getPath("dist") + "/css"));
});

gulp.task("styles::build-dev",
    [
        "styles::copy-vendor-dev",
        "styles::build-sass-dev"
    ]
);

paths.appendToPath("watch", paths.getPath("assets") + "/styles/**/*.scss");
