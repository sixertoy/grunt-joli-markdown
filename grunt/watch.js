/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        cwd: '.',
        livereload: false,
        livereloadOnError: false
    },
    styles: {
        files: ['./src/**/*.less'],
        tasks: ['less', 'autoprefixer']
    }
};
