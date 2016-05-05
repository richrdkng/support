const gulp     = require("gulp"),
      template = require("gulp-nunjucks"),
      rename   = require("gulp-rename"),

      use   = require("rekuire"),
      paths = use("paths"),
      data  = use(paths.getPath("assets/data"));

gulp.task("markup::build-index-dev", function() {
    return gulp
        .src([
            paths.getPath("assets") + "/markup/index/index.tpl"
        ])
        .pipe(template.compile(data.index))
        .pipe(rename({
            extname : ".html"
        }))
        .pipe(gulp.dest(paths.getPath("build")));
});

gulp.task("markup::build-404-dev", function() {
    return gulp
        .src([
            paths.getPath("assets") + "/markup/404/index.tpl"
        ])
        .pipe(template.compile(data["404"]))
        .pipe(rename({
            basename : "404",
            extname  : ".html"
        }))
        .pipe(gulp.dest(paths.getPath("build")));
});

gulp.task("markup::build-dev",
    [
        "markup::build-index-dev",
        "markup::build-404-dev"
    ]
);

paths.appendToPath("watch", paths.getPath("assets") + "/markup/**/*.tpl");
