/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        compress: false
    },
    dev: {
        files: {
            "./layout/joli-markdown/assets/reset.css": "./src/reset.less",
            "./layout/joli-markdown/assets/grid.css": "./src/grid.less",
            "./layout/joli-markdown/assets/styles.css": "./src/styles.less",
            "./layout/joli-markdown/assets/octicons.css": "./src/octicons/octicons.less"
        }
    }
};
