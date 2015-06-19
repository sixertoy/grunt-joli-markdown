/*jslint indent: 4 */
/*global module, console */
module.exports = {
    server: {
        options: {
            port: 9100,
            debug: true,
            base: ['./public/docs'],
            open: {
                appName: 'chrome'
            },
            keepalive: true,
            protocol: 'http',
            livereload: 35730,
            hostname: 'localhost',
            onCreateServer: function () {
                console.log('');
                console.log('/************************************************/');
                console.log('');
                console.log('Livereload on port 35730');
                console.log('');
                console.log('/************************************************/');
                console.log('');
            }
        }
    }
};
