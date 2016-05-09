const gulp     = require("gulp"),
      template = require("gulp-nunjucks"),
      rename   = require("gulp-rename"),
      extend   = require("extend"),

      use   = require("rekuire"),
      paths = use("paths"),
      data  = use(paths.getPath("assets/data"));

const DEVELOPMENT = 1,
      PRODUCTION  = 2,
      PAGE_INDEX  = 3,
      PAGE_404    = 4;

function getTemplateData(status, pageType) {
    var additionalData = {},
        baseData;

    switch (status) {
        case DEVELOPMENT :
            additionalData.DEVELOPMENT = true;
            additionalData.links = {
                root : data.links.root.dev
            };
            break;

        case PRODUCTION :
            additionalData.PRODUCTION = true;
            additionalData.links = {
                root : data.links.root.prod
            };
            break;
    }

    switch (pageType) {
        case PAGE_INDEX :
            baseData = data.index;
            break;

        case PAGE_404 :
            baseData = data[404];
            break;
    }

    return extend(true, {}, baseData, additionalData);
}

gulp.task("markup::build-index-dev", function() {
   return gulp
        .src([
            paths.getPath("assets") + "/markup/index/index.tpl"
        ])
        .pipe(template.compile(getTemplateData(DEVELOPMENT, PAGE_INDEX)))
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
        .pipe(template.compile(getTemplateData(DEVELOPMENT, PAGE_404)))
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
