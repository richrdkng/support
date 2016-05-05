requirejs.config({
    baseUrl : './js/scripts',
    // TODO delete in production
    urlArgs : "cb-" + new Date().getTime(),
    paths : {
        "jquery"    : ["../vendor/jquery"],
        "bootstrap" : ["../vendor/bootstrap"]
    },
    shim : {
        "bootstrap" : ["jquery"]
    }
});

// call main.js
define(["main"]);
