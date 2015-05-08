'use strict';

    // Task related
var name    = 'manage-metadata',

    // Project & path related
    project = require('../project'),
    root    = project.path.root,

    // Metadata related settings
    metadata = {
        package_json: {
            file: 'package-test.json',
            indentation: 2
        }
    },

    // Gulp related
    Task    = require('./helpers/task.helper'),
    gulp    = require('gulp'),
    debug   = require('gulp-debug'),
    file    = require('gulp-file'),
    clean   = require('del'),

    // JSON shortcut
    toJSON  = function(value, space) {
        return JSON.stringify(value, null, space);
    },

    log     = console.log;

module.exports = {
    package: {
        compile: new Task(
            name+':package:compile',
            function() {
                var meta = metadata.package_json;
                    source = {
                        name:           project.name,
                        version:        project.version,
                        description:    project.description
                    };

                var json = toJSON(source, meta.indentation);

                return file(root+'/'+meta.file, json, {src: true})
                    .pipe(debug())
                    .pipe(gulp.dest(root));
                }
        ),
        cleanup: new Task(
            name+':package:cleanup',
            function() {
                var meta = metadata.package_json;

                clean(root+'/'+meta.file,
                    {force: true}); // force: true allows deleting files outside of cwd
            }
        )
    }
};
