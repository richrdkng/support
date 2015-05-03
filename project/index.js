'use strict';

    // Project details
var name        = 'richrdkng-support',
    description = 'GitHub Support Page',
    version     = '1.0.0',
    homepage    = 'http://richrdkng.github.io/support/',
    repository = {
        credentials: null,
        git: 'https://github.com/richrdkng/support.git'
    },
    issues = '',

    authors = [
        ['Richard King', 'richrdkng@gmail.com', 'https://github.com/richrdkng']
    ],
    license = [
        'MIT'
    ],
    keywords = [],
    dependencies = {
        dependencies: {},
        peerDependencies: {},
        devDependencies: {}
    },

    // Paths
    p = require('path'),
    root = p.dirname(__dirname),
    path = {
        root:       root,
        master:     root,
        ghpages:    root,
        project:    p.normalize(root+'/project'),
        image:      p.normalize(root+'/image'),
        markup:     p.normalize(root+'/markup'),
        script:     p.normalize(root+'/script'),
        style:      p.normalize(root+'/style')
    },

    log = console.log;


module.exports = {
    name:           name,
    description:    description,
    version:        version,
    path:           path,
    repository:     repository
};