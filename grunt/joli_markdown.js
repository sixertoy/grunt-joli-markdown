/*jslint indent: 4 */
/*global module */
module.exports = {
    all: {
        files: [{
            ext: '.html',
            expand: true,
            flatten: true,
            dest: './docs/html/',
            src: './docs/src/*.md'
        }],
        options: {
            template: './docs/page.tpl'
        }
    }
};
