/**
 * Grunt Markdown Styles
 * https://github.com/malas34/grunt-markdown-styles
 *
 * Copyright (c) 2015 Matthieu Lassalvy
 * Licensed under the MIT license.
 *
 * @see https://github.com/mixu/markdown-styles
 *
 */
/*jslint plusplus: true, indent: 4 */
/*global module, require, process, console */
(function () {

    'use strict';

    var Grunt = require('grunt');

    module.exports = function (grunt) {

        var defaultsOptions,
            LF = Grunt.util.linefeed,
            commandLine = 'generate-md --layout <%= options.layout => --input <%= options.input => --output <%= options.output =>';

        defaultsOptions = {
            src: null,
            dest: null,
            expand: false,
            flatten: false,
            cwd: process.cwd(),
            // compiler options
            compiler: {
                input: './docs',
                output: './public/docs',
                layout: './bin/markdown'
            }
        };

        grunt.registerMultiTask('markdown_styles', 'Markdown documentation generator.', function (task) {
            console.log(task);
        });

    };

}());
