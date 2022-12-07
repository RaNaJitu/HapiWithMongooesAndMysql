exports.register = (server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            // return 'view'
            return h.view('manager/list.html', {   //HERE we can learn how to use Templates
                test: 'this is test'
            })
        }
    })
}

exports.pkg = {
    name: "manager"
}