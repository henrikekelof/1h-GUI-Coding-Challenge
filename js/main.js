/*globals $, self */

var GC = GC || {};

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
