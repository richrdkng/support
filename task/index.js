'use strict';

var project     = require('../project'),

    gulp        = require('gulp'),

    compilemarkup = require('./compile-markup.task'),
    genpackage  = require('./gen-package.task'),

    log         = console.log;

gulp.task(compilemarkup.name, compilemarkup.task);