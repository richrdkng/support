'use strict';

    // Project related
var project = require('../project'),

    // Gulp related
    Task = require('./helpers/task.helper'),
    gulp = require('gulp'),

    // Asset management tasks
    manage_image    = require('./manage-image.task'),
    manage_style    = require('./manage-style.task'),
    manage_script   = require('./manage-script.task'),
    manage_markup   = require('./manage-markup.task'),
    manage_assets   = require('./manage-assets.task'),

    // Metadata management tasks
    meta_package    = require('./manage-metadata.js'),

    log             = console.log;

Task.to(gulp)
    // Add asset management tasks
    .add(manage_image)
    .add(manage_style)
    .add(manage_script)
    .add(manage_markup)
    .add(manage_assets) // Manages all the asset

    // Add metadata compilation tasks
    .add(meta_package);
