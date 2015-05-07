'use strict';

    // Project related
var project = require('../project'),

    // Gulp related
    Task = require('./helpers/task.helper'),
    gulp = require('gulp'),

    // Asset management tasks
    manage_image    = require('./manage-image.task.js'),
    manage_style    = require('./manage-style.task.js'),
    manage_script   = require('./manage-script.task.js'),
    manage_markup   = require('./manage-markup.task.js'),

    // Metadata management tasks
    meta_package    = require('./compile-metadata-package.task'),

    genpackage      = require('./compile-metadata-package.task.js'),

    log             = console.log;

Task.to(gulp)
    // Add asset management tasks
    .add(manage_image)
    .add(manage_style)
    .add(manage_script)
    .add(manage_markup)

    // Add metadata compilation tasks
    .add(meta_package);
