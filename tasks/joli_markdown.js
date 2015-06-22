/**
 *
 *
 * grunt-joli-markdown
 * https://github.com/malas/grunt-joli-markdown
 *
 * Copyright (c) 2015 sixertoy
 * Licensed under the MIT license.
 *
 * Building the files object dynamically
 * @see http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
 *
 */
/*jslint indent: 4 */
/*globals module, require, console, grunt, process */
(function () {
    'use strict';

    var path = require('path'),
        lodash = require('lodash'),
        render = require('markdown-styles').render,

        utils = {
            validString: function (grunt, value) {
                return lodash.isString(value) && !lodash.isEmpty(value);
            },
            validArray: function (grunt, value) {
                return lodash.isArray(value);
            },
            normalizePath: function (options) {
                options.input = path.normalize(options.input);
                options.output = path.normalize(options.output);
                options.layout = path.normalize(options.layout);
            }
        };

    /**
     *
     *
     *
     */
    module.exports = function (grunt) {
        grunt.registerTask('joli_markdown', 'The best Grunt plugin ever.', function () {
            //
            // variables
            var spOptions, options, defaultLayout,
                isValidInput, isValidOuput, isValidLayout,
                done = this.async(),
                base = path.dirname(module.filename),
                debug = (grunt.option('debug') === 1),
                stdiomode = debug ? 'inherit' : 'ignore';

            //
            // construction du fichier de template par default
            defaultLayout = path.join(base, '../', 'layout/joli-markdown');
            options = this.options({
                input: null,
                output: null,
                debug: debug,
                cwd: process.cwd(),
                layout: defaultLayout,
            });
            //
            // validation des options
            isValidInput = utils.validString(grunt, options.input);
            isValidOuput = utils.validString(grunt, options.output);
            isValidLayout = utils.validString(grunt, options.layout);
            // verification
            if (isValidInput && isValidOuput && isValidLayout) {
                grunt.log.subhead('start compile documentation');
                render(options, function () {
                    grunt.log.ok('documentation compile success');
                    done();
                });

            } else {
                grunt.log.error('missing arguments');
                done();
            }

        });
    };
}());
