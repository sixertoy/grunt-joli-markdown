/*jslint indent:4 */
/*global require, module */
(function () {
    'use strict';
    var Handlebars = require('handlebars');
    module.exports = function () {
        return new Handlebars.SafeString("<a href='" + Handlebars.Utils.escapeExpression(this.url) + "'>" + Handlebars.Utils.escapeExpression(this.body) + "</a>");
    };
}());
