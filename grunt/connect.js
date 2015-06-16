/*jslint indent: 4 */
/*global module */
module.exports = {
    server: {
        options: {
            port: 9000,
            debug: true,
            base: {
                path: 'coverage/lcov-report',
                options: {
                    maxAge: 300000,
                    index: 'index.html'
                }
            },
            open: true,
            /*
            open: {
                appName: 'chrome',
                callback: function () {
                    'use strict';
                },
                target: 'http://localhost:9000'
            },
            */
            keepalive: true,
            protocol: 'http',
            livereload: 35729,
            hostname: 'localhost',
            onCreateServer: function (server, connect, options) {
                'use strict';
                // var io = require('socket.io').listen(server);
                // io.sockets.on('connection', function (socket) {});
            }
        }
    }
};
