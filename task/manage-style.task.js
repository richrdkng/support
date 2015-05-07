'use strict';

    // Task related
var name        = 'manage-style',

    // Project & path related
    project     = require('../project'),
    style       = project.path.style,
    assets      = style+'/assets',

    // Gulp related
    Task        = require('./helpers/task.helper'),
    gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    stylus      = require('gulp-stylus'),
    clean       = require('del'),

    log         = console.log;

module.exports = {
    compile: new Task(
        name+':compile',
        function() {
            return gulp.src(
                    assets+'/main.styl'
                )
                .pipe(debug())
                .pipe(stylus())
                .pipe(gulp.dest(style));
        }
    ),
    cleanup: new Task(
        name+':cleanup',
        function() {
            clean([
                style+'/*.*',
                assets+'/sprites.styl'
                ], {force: true}); // force: true allows deleting files outside of cwd
        }
    )
};
