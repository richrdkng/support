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
    debug       = require('gulp-debug'),
    browserify  = require('browserify'),
    transform   = require('vinyl-transform'),
    source      = require('vinyl-source-stream'),

    //gmustache   = require('gulp-mustache'),
    //rename      = require('gulp-rename'),

    //fs          = require('fs'),
    //mustache    = require('mustache'),

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
        /*
        var browserified = transform(function(filename) {
            var b = browserify(filename);
            return b.bundle();
        });

        return gulp.src(assets+'/main.js')
                .pipe(debug())
                .pipe(browserified)
                .pipe(gulp.dest(script));
                */
    }
);
