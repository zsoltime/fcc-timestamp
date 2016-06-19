"use strict"
var timestamp = function(str) {
    var format = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    var date = isNaN(str) ? new Date(str) : new Date(+str * 1000);

    return (date.getTime() > 0)
        ? {
            unix: date.getTime() / 1000,
            natural: date.toLocaleDateString("en-GB", format)
        }
        : {
            unix: null,
            natural: null
        };
};

module.exports = timestamp;