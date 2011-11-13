/* head.js */

var GC = GC || {};

GC.namespace = function (namespace) {
    "use strict";
    var parts = namespace.split('.'),
        parent = GC,
        i;
    if (parts[0] === "GC") {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};
