'use strict';

    // Task related
var name        = 'compile-script',

    // Project & path related
    project     = require('../project'),
    script      = project.path.script,
    assets      = script+'/assets',

    // Gulp related
    Task        = require('./helpers/task.helper'),
    gulp        = require('gulp'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),

    log         = console.log;

module.exports = new Task(
    name,
    [],
    function() {
        return browserify(assets+'/main.js')
            .bundle()
            //Pass desired output filename to vinyl-source-stream
            .pipe(source('main.js'))
            // Start piping stream to tasks!
            .pipe(gulp.dest(script));
    }
);
