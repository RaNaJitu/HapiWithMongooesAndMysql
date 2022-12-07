//! UDEMY server setup  with  HTTP ROUTES topic  link is below 
//? https://www.udemy.com/course/nodejs-hapijs-building-enterprise-web-applications/learn/lecture/11885014#overview
// TODO learning  https://hapi.dev/tutorials/gettingstarted/?lang=en_US
// 'use strict';

// const Hapi = require('hapi');
// const Joi = require('joi');
// const { iso } = require('joi/lib/types/date');
// const { Task } = require('./mongodb');

// const init = async () => {

//     const server = Hapi.server({
//         port: 4001,
//         host: 'localhost'
//     });

//     //! HERE FETCHING DATA FROM MONGOES 
//     server.route({
//         method: 'GET',
//         path: '/',
//         handler: (request, h) => {
//             console.log('----test----');
//             const data = Task.find()
//             return 'Hello World! FROM TIME CLOCK', data;
//         }
//     });


//     // server.route({
//     //     method: 'POST',
//     //     path: '/shift',
//     //     config:{
//     //         validate:{
//     //             payload:{
//     //                 // start:Joi.date().required(),
//     //                 // end:Joi.date().required()
//     //                 start:Joi.date().iso().max('now').required(),
//     //                 end:Joi.date().iso().min(Joi.ref('start')).max('now').required() //!this code is written for checking the end date is grater then start date
//     //             }
//     //         }
//     //     },
//     //     handler: (request, h) => {
//     //         console.log('---data came---');
//     //         return request.payload;
//     //     },
//     //     // failAction:(request, h, error) =>{
//      //      return error.isJoi ? h.response(error.details[0]).takover() : h.response(error).takeover();
//     //     //     throw error;
//     //     // }
        
//     // })


//     await server.start();
//     console.log('Server running on %s', server.info.uri);
// };

// process.on('unhandledRejection', (err) => {

//     console.log(err);
//     process.exit(1);
// });

// init();







//********************************************************************************* */

//! THIS IS FOR  SERVER CONFIGURATION WITH GLUE  udemy course link is below 
//TODO learning https://github.com/hapijs/glue/blob/master/API.md  
//? https://www.udemy.com/course/nodejs-hapijs-building-enterprise-web-applications/learn/lecture/11885070#overview

'use strict';

const Glue = require('glue');
require('dotenv').config();

const manifest = require('./manifest')

const options = {
    relativeTo: __dirname
};

const startServer = async function () {
    try {
        const server = await Glue.compose(manifest, options);
        console.log('--manifest--')
        await server.start();
        // console.log(`Server started on PORT ${manifest.server.port}`);
        console.log(`Server started on PORT ${process.env.PORT}`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();