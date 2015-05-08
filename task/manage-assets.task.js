'use strict';

    // Task related
var name = 'manage-assets',

    // Project & path related
    project         = require('../project'),

    // Asset related tasks
    image_assets    = require('./manage-image.task'),
    style_assets    = require('./manage-style.task'),
    script_assets   = require('./manage-script.task'),
    markup_assets   = require('./manage-markup.task'),

    // Gulp related
    Task        = require('./helpers/task.helper'),
    gulp        = require('gulp'),
    sequence    = require('run-sequence');

module.exports = {
    compile: new Task(
        name+':compile',
        function() {
            sequence(
                image_assets.compile.getName(),
                style_assets.compile.getName(),
                script_assets.compile.getName(),
                markup_assets.compile.getName()
            );
        }
    ),
    cleanup: new Task(
        name+':cleanup',
        function() {
            sequence(
                image_assets.cleanup.getName(),
                style_assets.cleanup.getName(),
                script_assets.cleanup.getName(),
                markup_assets.cleanup.getName()
            );
        }
    )
};
