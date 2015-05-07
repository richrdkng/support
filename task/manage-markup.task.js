'use strict';

    // Task related
var name        = 'manage-markup',

    // Project & path related
    project     = require('../project'),
    markup      = project.path.markup,
    assets      = markup+'/assets',
    templates   = assets+'/templates',

    // Markup data
    data        = require(markup+'/assets/markup-data'),

    // Gulp related
    Task        = require('./helpers/task.helper'),
    gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    gmustache   = require('gulp-mustache'),
    rename      = require('gulp-rename'),
    clean       = require('del'),

    fs          = require('fs'),
    mustache    = require('mustache'),

    log         = console.log;

function processTemplate(pathToTemplate, data) {
    return mustache.to_html(
        fs.readFileSync(pathToTemplate, {encoding: 'utf8'}),
        data
    )
}

module.exports = {
    compile: new Task(
        name+':compile',
        function() {
            // Document components and parts
            var doc_head,
                doc_body,
                comp_header,
                comp_main,
                comp_footer;

            // Read templates, than process them
                // Process components first
                comp_header = processTemplate(templates+'/component.header.mustache', data);
                comp_main   = processTemplate(templates+'/component.main.mustache', data);
                comp_footer = processTemplate(templates+'/component.footer.mustache', data);

                // Fill with components
                data.header = comp_header;
                data.main   = comp_main;
                data.footer = comp_footer;

                // Process document parts
                doc_head = processTemplate(templates+'/document.head.mustache', data);
                doc_body = processTemplate(templates+'/document.body.mustache', data);

                // Fill with parts
                data.head = doc_head;
                data.body = doc_body;

            // Process the whole document finally
            return gulp.src(templates+'/document.mustache')
                    .pipe(debug())
                    .pipe(gmustache(data))
                    .pipe(rename({
                        basename:   'raw-index',
                        extname:    '.html'
                    }))
                    .pipe(debug())
                    .pipe(gulp.dest(markup));
        }
    ),
    cleanup: new Task(
        name+':cleanup',
        function() {
            clean([markup+'/*.*'], {force: true}); // force: true allows deleting files outside of cwd
        }
    )
};
