//? this is for glut 

const Path = require('path');
module.exports = {
    server: {
        port: 4000,
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    },
    register: {
        plugins: [
            {
                plugin: require('inert')
            },
            {
                plugin: 'vision',
                option: {
                    engines: {
                        html: require('handlebars')
                    },
                    Path: __dirname
                }
            },
            {
                plugin: require('./auth')
            },
            {
                plugin: require('./router/home')
            },
            {
                plugin: require('./router/manager'),
                routes: {
                    prefix: '/manager'
                }
            },
            {
                plugin: require('./router/task'),
                routes: {
                    prefix: '/task'
                }
            }
        ]
    }
}