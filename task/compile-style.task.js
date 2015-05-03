'use strict';

    // Task related
var name        = 'compile-style',

    // Project & path related
    project     = require('../project'),
    style       = project.path.style,
    assets      = style+'/assets',

    // Gulp related
    Task        = require('./helpers/task.helper'),
    gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    stylus      = require('gulp-stylus'),
    //gmustache   = require('gulp-mustache'),
    //rename      = require('gulp-rename'),

    //fs          = require('fs'),
    //mustache    = require('mustache'),

    log         = console.log;

module.exports = new Task(
    name,
    [],
    function() {
        return gulp.src(assets+'/main.styl')
                .pipe(debug())
                .pipe(stylus())
                .pipe(gulp.dest(style));
    }
);
