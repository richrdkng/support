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
    //gmustache   = require('gulp-mustache'),
    //rename      = require('gulp-rename'),

    //fs          = require('fs'),
    //mustache    = require('mustache'),

    log         = console.log;

module.exports = new Task(
    name,
    [],
    function() {
        return gulp.src(assets+'/main.js')
                .pipe(debug())
                //.pipe(gulp.dest(script));
    }
);
