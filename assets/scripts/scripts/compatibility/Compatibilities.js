define(function(require) {
    var Console = require("compatibility/Console"),
        JQuery  = require("compatibility/JQuery");

    return {
        applyCompatibilities : function() {
            Console.applyCompatibility();
            JQuery.applyCompatibility();
        }
    };
});
