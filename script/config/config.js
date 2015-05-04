// Config for browserify-shim

module.exports = {
    'window':   { exports: 'global:window' },
    'document': { exports: 'global:document' },
    'jquery':   { exports: 'global:jQuery' }
};
