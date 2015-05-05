'use strict';

    // Task related
var name    = 'compile-metadata-package',

    // Project & path related
    project = require('../project'),
    root    = project.path.root,

    // Gulp related
    Task    = require('./helpers/task.helper'),
    gulp    = require('gulp'),
    debug   = require('gulp-debug'),

    log     = console.log;

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
