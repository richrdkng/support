'use strict';

    // Task related
var name        = 'compile-image',

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
    //gmustache   = require('gulp-mustache'),
    //rename      = require('gulp-rename'),

    //fs          = require('fs'),
    //mustache    = require('mustache'),

    log         = console.log;

module.exports = new Task(
    name,
    [],
    function() {
        var spriteStream = gulp.src(assets+'/*.png')
                            .pipe(sprite({
                                imgName: 'sprites.png',
                                cssName: 'sprites.styl'
                            }));

        spriteStream.img
            .pipe(debug())
            .pipe(gulp.dest(image));

        spriteStream.css
            .pipe(debug())
            .pipe(gulp.dest(style_assets));
    }
);