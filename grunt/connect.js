/*jslint indent: 4 */
/*global module */
module.exports = {
    server: {
        options: {
            port: 9000,
            debug: true,
            base: {
                path: 'public/docs',
                options: {
                    maxAge: 300000,
                    index: 'index.html'
                }
            },
            open: true,
            keepalive: true,
            protocol: 'http',
            livereload: 35729,
            hostname: 'localhost'
        }
    }
};
