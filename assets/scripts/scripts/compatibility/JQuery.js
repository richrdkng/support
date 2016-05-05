define(function(require) {
    return {
        applyCompatibility : function() {
            // removes jQuery from global scope
            require("Vendor/JQuery");
        }
    };
});
