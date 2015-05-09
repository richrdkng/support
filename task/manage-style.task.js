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
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),

    log         = console.log;

module.exports = {
    cleanup: new Task(
        name+':cleanup',
        function() {
            clean([
                style+'/*.*',
                assets+'/sprites.styl'
                ], {force: true}); // force: true allows deleting files outside of cwd
        }
    ),
    compile: new Task(
        name+':compile',
        function() {
            return gulp.src(
                    assets+'/main.styl'
                )
                .pipe(debug())
                .pipe(stylus())
                .pipe(rename({
                    basename: 'raw_main',
                    extname:  '.css'
                }))
                .pipe(gulp.dest(style));
        }
    ),
    assemble: new Task(
        name+':assemble',
        function() {
            return gulp.src(
                    style+'/raw_main.css'
                )
                .pipe(debug())
                //.pipe() // TODO css-clean
                .pipe(rename({
                    basename: 'main',
                    extname:  '.css'
                }))
                .pipe(gulp.dest(style));
        }
    )
};
