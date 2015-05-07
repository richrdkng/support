'use strict';

    // Task related
var name        = 'manage-image',

    // Project & path related
    project     = require('../project'),
    image       = project.path.image,
    assets      = image+'/assets',
    style_assets = project.path.style+'/assets',

    // Gulp related
    Task        = require('./helpers/task.helper'),
    gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    sprite      = require('gulp.spritesmith'),
    clean       = require('del'),

    log         = console.log;

module.exports = {
    compile: new Task(
        name+':compile',
        function() {
            gulp.src([assets+'/apple-touch-icon.png',
                      assets+'/favicon.ico',
                      assets+'/tile*.png'])
                .pipe(debug())
                .pipe(gulp.dest(image));

            var stream = gulp.src(['!'+assets+'/apple-touch-icon.png',
                                   '!'+assets+'/favicon.ico',
                                   '!'+assets+'/tile*.png',
                                       assets+'/*.png'])
                             .pipe(sprite({
                                imgName: 'sprites.png',
                                cssName: 'sprites.styl'
                             }));

            stream.img
                .pipe(debug())
                .pipe(gulp.dest(image)); // image assets

            stream.css
                .pipe(debug())
                .pipe(gulp.dest(style_assets));
        }
    ),
    cleanup: new Task(
        name+':cleanup',
        function() {
            clean([image+'/*.*'], {force: true}); // force: true allows deleting files outside of cwd
        }
    )
};
