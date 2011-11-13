/*globals $, self */

var GC = GC || {};

/* 
Fix för iPhone:s zoom-bugg vid orientation change
http://adactio.com/journal/4470/
*/
(function () {
    "use strict";
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        var viewportmeta = document.querySelector('meta[name="viewport"]');
        if (viewportmeta) {
            viewportmeta.content = 'width=device-width,minimum-scale=1.0, maximum-scale=1.0';
            document.body.addEventListener('gesturestart', function () {
                viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
            }, false);
        }
    }
}());


GC.namespace('GC.util');
GC.util = (function () {
    "use strict";
    function hideURLbar() {
        if (!location.hash && !self.pageYOffset) {
            setTimeout(function () { window.scrollTo(0, 1); }, 1);
        }
    }
    return {
        hideURLbar : hideURLbar
    };
}());

$(document).ready(GC.util.hideURLbar);
