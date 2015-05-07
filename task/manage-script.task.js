'use strict';

    // Task related
var name        = 'manage-script',

    // Project & path related
    project     = require('../project'),
    script      = project.path.script,
    assets      = script+'/assets',

    // Gulp related
    Task        = require('./helpers/task.helper'),
    gulp        = require('gulp'),
    browserify  = require('browserify'),
    stream      = require('vinyl-source-stream'),
    clean       = require('del'),

    log         = console.log;

module.exports = {
    compile: new Task(
        name+':compile',
        function() {
            return browserify(assets+'/main.js')
                    .bundle()
                    .pipe(stream('main.js'))
                    .pipe(gulp.dest(script));
        }
    ),
    cleanup: new Task(
        name+':cleanup',
        function() {
            clean([script+'/*.*'], {force: true}); // force: true allows deleting files outside of cwd
        }
    )
};
