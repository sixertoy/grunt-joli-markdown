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

    module.exports = function (grunt) {
        grunt.registerTask('joli_markdown', 'The best Grunt plugin ever.', function () {
            //
            // variables
            var spOptions,
                isValidPages,
                isValidInput,
                isValidOuput,
                isValidLayout,
                done = this.async(),
                options = this.options({
                    pages: [],
                    input: null,
                    output: null,
                    cwd: process.cwd(),
                    layout: 'layout/joli-markdown'
                }),
                stdiomode = grunt.option('debug') ? 'inherit' : 'ignore';

            console.log();

            //
            // validation des options
            isValidPages = utils.validArray(grunt, options.pages);
            isValidInput = utils.validString(grunt, options.input);
            isValidOuput = utils.validString(grunt, options.output);
            isValidLayout = utils.validString(grunt, options.layout);
            // verification
            if (isValidInput && isValidOuput && isValidLayout && isValidPages) {
                utils.normalizePath(options);
                spOptions = {
                    grunt: false,
                    cmd: 'generate-md',
                    opts: {
                        stdio: stdiomode
                    },
                    args: ['--layout', options.layout, '--input', options.input, '--output', options.output]
                };
                // log
                grunt.log.subhead('start compile documentation');
                // call generate-md compile
                grunt.util.spawn(spOptions, function (err, res) {
                    if (err) {
                        throw err;
                    } else {
                        grunt.log.ok('documentation compile success');
                        done();
                    }
                });
            } else {
                grunt.log.error('missing arguments');
                done();
            }

        });
    };
}());
