'use strict';

    // Project related
var project = require('../project'),

    // Gulp related
    Task = require('./helpers/task.helper'),
    gulp = require('gulp'),

    // Asset compilation tasks
    asset_image  = require('./compile-image.task'),
    asset_style  = require('./compile-style.task'),
    asset_script = require('./compile-script.task'),
    asset_markup = require('./compile-markup.task'),

    genpackage      = require('./gen-package.task'),

    log             = console.log;

Task.to(gulp)
    // Add asset compilation tasks
    .addTask(asset_image)
    .addTask(asset_style)
    .addTask(asset_script)
    .addTask(asset_markup);
