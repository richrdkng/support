'use strict';

    // Task related
var name    = 'compile-metadata-bower',

    // Project & path related
    project = require('../project'),
    root    = project.path.root,

    // Gulp related
    Task    = require('./helpers/task.helper'),
    gulp    = require('gulp'),
    debug   = require('gulp-debug'),
    file    = require('gulp-file'),

    log     = console.log;


module.exports = new Task(
    name,
    [],
    function() {
        var source_obj = {
            name:           project.name,
            version:        project.version,
            description:    project.description
        };

        var package_json = JSON.stringify(source_obj, null, 2); // indent with 2 spaces

        return file('bower-test.json', package_json, {src: true})
            .pipe(debug())
            .pipe(gulp.dest(root));
    }
);
