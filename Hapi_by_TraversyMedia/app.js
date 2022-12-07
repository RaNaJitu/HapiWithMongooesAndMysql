// const Hapi = require('hapi');

// // const server = new Hapi.Server();

// // const app = express();
// const server = new Hapi.Server({ port: 8080, host: 'localhost' });
// //! ADD CONNECTION
// // server.connection({ port: 3000, host: 'localhost' });
// // server.connection({
// //     port:8080,
// //     host:'localhost'
// // });


// //! Home Route

// server.route({
//     method: 'GET',
//     path:'/',
//     handler: (request, reply) => {
//         console.log('----ching chowng');
//         // reply('Hello World')
//         return 'Hello World';
//     }
// })

// //Dynamic Route
// server.route({
//     method: 'GET',
//     path: '/helloworld/{name}',
//     handler: function (request, reply) {
//         console.log('Dynamic Route');
//     return `hello world, ${ request.params.name }`; 
//  }
//  });


//  //! STATIC ROUTES
//  server.register(require('inert'));
//  server.route({
//     method: 'GET',
//     path: '/picture',
//     handler: function (request, h) {

//         return h.file('./public/about.html');
//     }
// });
// //  server.register(require('inert'), (err) => {
// //     if(err){
// //         throw err;
// //     }

// //     server.route({
// //         method: 'GET',
// //         path:'/about',
// //         handler: (request, h) => {
// //             console.log('----ching chowng');
// //             h.file('./public/about.html');
// //             // reply.file('./public/about.html')
// //         }
// //     })
// //  })



// server.start((err) => {
//     if (err) {
//         throw err;
//     }
// });
// console.log(`SERVER STARTED AT: ${server.info.uri}`);
// // server.start();
// // console.log('Server running on %s', server.info.uri);






const Hapi = require('hapi');
const Path = require('path');

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/hapidb', { useMongoClient: true })
mongoose.connect('mongodb://localhost:27017/hapidb')
    .then(() => console.log('MongoDB CONNECTED...'))
    .catch(err => console.log(err));



const Task = mongoose.model('Task', { text: String });


const start = async () => {
    // const Task = mongoose.model('Task', { text: String });
    // const server = Hapi.server({
    //     routes: {
    //         files: {
    //             relativeTo: Path.join(__dirname, 'public')
    //         }
    //     }
    // });

    const server = new Hapi.Server({ port: 8080, host: 'localhost' });

    await server.register(require('inert'));

    server.route({
        method: 'GET',
        path: '/about',
        handler: function (request, h) {

            return h.file('./public/about.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/image',
        handler: function (request, h) {

            return h.file('./public/image.jpg');
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            console.log('----ching chowng');
            h.view('index')
            // reply('Hello World')
            // return 'Hello World';
        }
    })

    //Dynamic Route
    server.route({
        method: 'GET',
        path: '/{name}',
        handler: function (request, reply) {
            console.log('Dynamic Route');
            return `hello world, ${request.params.name}`;
        }
    });

    //!vision templates
    await server.register(require('vision', (err) => {
        if(err){
                throw err;
        }
        server.views({
            engines:{
                html:require('handlebars')
            },
            path: __dirname +'/views'
        })
    }));

    //DATABASE SE DATA AA RHA H 
    server.route({
        method: 'GET',
        path: '/tasks',
        handler: function (request, reply) {
            console.log('Dynamic Route');
            let task = Task.find((err, tasks) => {
               console.log('----task-----');
                console.log('----task-----', tasks);
            });
            // return `hello world,`;
        }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
};

start();