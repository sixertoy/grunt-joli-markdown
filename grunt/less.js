/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        compress: false
    },
    dev: {
        files: {
            "./bin/markdown/assets/style.css": "./src/styles.less"
        }
    }
};
