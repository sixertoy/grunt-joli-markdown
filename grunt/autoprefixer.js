/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        remove: true,
        cascade: true,
        browsers: ['> 1%', 'ie 8', 'ie 9']
    },
    css: {
        expand: true,
        flatten: false,
        src: ['*.css'],
        cwd: './layout/joli-markdown/assets/',
        dest: './layout/joli-markdown/assets/'
    }
};
