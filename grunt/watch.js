/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        cwd: '.',
        livereload: true,
        livereloadOnError: false
    },
    styles: {
        files: ['./src/**/*.less', './docs/**/*.md', './bin/markdown/**/*.html'],
        tasks: ['less', 'autoprefixer', 'exec:documentation']
    }
};
