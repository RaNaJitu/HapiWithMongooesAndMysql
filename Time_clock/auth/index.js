const service = require('./services')
exports.register = async function (server) {
    await server.register(require('hapi-auth-basic'));   
    // await server.register(require('hapi-auth-cookie'));   
    // Here we are using the basic auth
    //? https://github.com/hapijs/basic/blob/master/API.md
    //todo https://www.udemy.com/course/nodejs-hapijs-building-enterprise-web-applications/learn/lecture/11885102#reviews
    server.auth.strategy('simple', 'basic', {
        validate: service.validate
    });

    //!Here i am trying to create cookie and azuread but it is not working 
    // server.auth.strategy('session', 'cookie', {
    //         password: 'password-should-be-32-characters',
    //         redirectTo:'/',
    //         appendNext: true,
    //         isSecure: false
    // });

    // server.auth.strategy('azure', 'bell', {
    //     provider: 'azuread',
    //     password: 'cookie_encryption_password_secure',
    //     clientId: '',
    //     clientSecret: '',
    //     config: {
    //         talent: ''
    //     },
    //     isSecure: false     // Terrible idea but required if not using HTTPS especially if developing locally
    // });
}

exports.pkg = {
    name: 'auth'
}