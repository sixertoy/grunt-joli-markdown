/*
 * grunt-joli-markdown
 * https://github.com/malas/temp
 *
 * Copyright (c) 2015 sixertoy
 * Licensed under the MIT license.
 */
/*jslint indent: 4 */
/*globals module, require, console */
(function () {
    'use strict';

    module.exports = function (grunt) {

        // Please see the Grunt documentation for more information regarding task
        // creation: http://gruntjs.com/creating-tasks

        grunt.registerMultiTask('joli_markdown', 'The best Grunt plugin ever.', function () {

            console.log('joli_markdown');

            // Merge task-specific and/or target-specific options with these defaults.
            var options = this.options({
                punctuation: '.',
                separator: ', '
            });

            // Iterate over all specified file groups.
            this.files.forEach(function (f) {
                console.log('joli_markdown');
            });
        });

    };

}());

