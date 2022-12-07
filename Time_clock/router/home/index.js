// SERVER CONTENT OVER HTTP topic on udemy link below
//? https://www.udemy.com/course/nodejs-hapijs-building-enterprise-web-applications/learn/lecture/11885082#reviews
//TODO https://github.com/hapijs/inert/blob/master/API.md

exports.register = (server) => {
    console.log('-----------HOME CALLED------------------');
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: false,
            }
        }
    });
    
    server.route({
        method: 'GET',
        path: '/',
        handler: {
            file: 'index.html'
        }
    });

    server.route({
        method: 'GET',
        path: '/demo',
        handler: (request, h) => {
            return 'Hello World! FROM TIME CLOCK';
        }
    });
}

exports.pkg = {
    name: "home"
}