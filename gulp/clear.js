const gulp   = require("gulp"),
      remove = require("del"),

      use   = require("rekuire"),
      paths = use("paths");

gulp.task("clear", [], function(cb) {
    var dist = paths.getPath("dist");

    remove(
        [
            dist + "/**/.*", // include . (dot) files and folders
            dist + "/**/*",

            /*
             **NOTE**
             Make sure to list excluded globs **AFTER** the inclusions,
             otherwise the excluded will be deleted too!
             */

            // exclude git related folders and files (.git, .gitignore, etc.)
            "!" + dist + "/.{git,gitattributes,gitignore}",

            // exclude .editorconfig
            "!" + dist + "/.editorconfig"
        ],
        {
            force : true // remove files and folders outside of cwd
        }
    )
    .then(
        // success
        function() {
            cb();
        },
        // error
        function() {
            console.log(arguments);
            cb();
        }
    );
});
