'use strict';

var name    = 'gen-package',
    project = require('../project'),

    gulp    = require('gulp'),

    log     = console.log;

module.exports = {
    name: name,
    task: function() {
        return gulp
            .src('')
            .pipe(debug());
    }
};