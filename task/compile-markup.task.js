'use strict';

var name        = 'compile-markup',
    project     = require('../project'),

    // Paths
    markup      = project.path.markup,
    templates   = markup+'/assets/templates',

    data        = require(markup+'/assets/markup-data'),

    gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    gmustache   = require('gulp-mustache'),
    rename      = require('gulp-rename'),

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
    name: name,
    task: function() {
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
};