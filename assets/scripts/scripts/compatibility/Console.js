// Avoid `console` errors in browsers that lack a console.

define(function() {
    return {
        applyCompatibility : function() {
            var methods = [
                    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
                    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
                    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
                    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
                ],
                length  = methods.length,
                console = (window.console = window.console || {}),
                noop    = function() {},
                method;

            while (length--) {
                method = methods[length];

                // Only stub undefined methods.
                if (!(method in console)) {
                    console[method] = noop;
                }
            }
        }
    };
});
