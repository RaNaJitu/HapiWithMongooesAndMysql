const Joi = require('joi')
const postEmployee = require('./post');
const getEmployee = require('./get');
const patchEmployee = require('./patch');
const deleteEmployee = require('./delete');
const getById = require('./getById');
const entity = 'employee';
const service = require('../../mongodb/index');
const { async } = require('rxjs');
///https://github.com/hapijs/glue/blob/master/API.md


exports.register = (server, option) => {
    console.log('-----------EMPLOYEE CALLED------------------');
    server.route({
        method: 'POST',
        path: '/shift',
        //! Here we learn validation using JOI through udemy link is below
        //? https://www.udemy.com/course/nodejs-hapijs-building-enterprise-web-applications/learn/lecture/11885062#overview
        //TODO leaning site https://hapi.dev/tutorials/validation/?lang=en_US
        config:{
            auth: 'simple',
            validate:{
                payload: {
                    text:Joi.string().required(),
                }
                //! THIS PAYLOAD IS FOR MYSQL   
                // payload:{
                //     // start:Joi.date().required(),
                //     // end:Joi.date().required()
                //     start:Joi.date().iso().max('now').required(),
                //     end:Joi.date().iso().min(Joi.ref('start')).max('now').required() //!this code is written for checking the end date is grater then start date
                // }
            }
        },
        handler: postEmployee.APIHandler

        
        //!HERE DATA INSERTING IN MySQL
        // handler: async (request, h) => {
        //     const start = request.payload.start;
        //     const end = request.payload.end;
        //     console.log('---data came---');
        //     console.log('---start---', start);
        //     console.log('---equest.auth.credentials.username---', request.auth.credentials.username);
        //     await service.save({
        //         start: start,
        //         end: end,
        //         username: request.auth.credentials.username
        //     });
            
        //     let hours = ((end.valueOf() - start.valueOf()) /1000/60/60).toFixed(2);
        //     console.log('---hours---', hours);
            
        //     return h.response({
        //         message: `Thanks You for entering your shift. Your shift was ${hours} hours`
        //     })
        //     // return {
        //     //     payload: request.payload,
        //     //     credentials: request.auth.credentials
        //     // }
        // },
        // failAction:(request, h, error) =>{
        //     throw error;
        // }

    })

    server.route({
        method: 'GET',
        path: '/shift',
        handler: getEmployee.APIHandler
    })

    server.route({
        method: 'PATCH',
        path: '/shift',
        config:{
            auth: 'simple',
        },
        handler: patchEmployee.APIHandler
    })

    server.route({
        method: 'DELETE',
        path: '/shift',
        config:{
            auth: 'simple',
        },
        handler: deleteEmployee.APIHandler
    })

    server.route({
        method: 'GET',
        path: '/shift/{id}',
        config:{
            auth: 'simple',
        },
        handler: getById.APIHandler
    })
}

exports.pkg = {
    name: "employee"
}


