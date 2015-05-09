'use strict';

    // Task related
var name        = 'manage-image',

    // Project & path related
    project     = require('../project'),
    root        = project.path.root,
    image       = project.path.image,
    assets      = image+'/assets',
    style_assets = project.path.style+'/assets',

    // Gulp related
    Task        = require('./helpers/task.helper'),
    gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    sprite      = require('gulp.spritesmith'),
    clean       = require('del'),
    rename      = require('gulp-rename'),

    log         = console.log;

module.exports = {
    cleanup: new Task(
        name+':cleanup',
        function() {
            clean([
                root+'/apple-touch-icon.png',
                root+'/favicon.ico',
                root+'/tile*.png',
                image+'/*.*',
                style_assets+'/sprites.styl'
                ], {force: true}); // force: true allows deleting files outside of cwd
        }
    ),
    compile: new Task(
        name+':compile',
        function() {
            gulp.src([assets+'/apple-touch-icon.png',
                      assets+'/favicon.ico',
                      assets+'/tile*.png'])
                .pipe(debug())
                .pipe(gulp.dest(root));

            var stream = gulp.src(['!'+assets+'/apple-touch-icon.png',
                                   '!'+assets+'/favicon.ico',
                                   '!'+assets+'/tile*.png',
                                       assets+'/*.png'])
                             .pipe(sprite({
                                imgName: 'sprites.png',
                                cssName: 'sprites.styl'
                             }));

            stream.img // save sprites image
                .pipe(debug())
                .pipe(rename({
                    basename: 'raw_sprites',
                    extname:  '.png'
                }))
                .pipe(gulp.dest(image)); // image assets dir

            stream.css // save sprites style
                .pipe(debug())
                .pipe(gulp.dest(style_assets));
        }
    ),
    assemble: new Task(
        name+':assemble',
        function() {
            var imagemin = require('imagemin');
            var pngquant = require('imagemin-pngquant');

            new imagemin()
                .src(image+'/raw_sprites.png')
                .use(rename({
                    basename: 'sprites',
                    extname:  '.png'
                }))
                .dest(image)
                .use(pngquant({quality: '65-80', speed: 1}))
                .run();
        }
    )
};
