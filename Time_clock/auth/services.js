const users = {
    john: {
        username: 'john',
        // password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
        password: 'change',   // 'secret'
        name: 'John Doe',
        id: '2133d32a'
    },
    client: {
        username: 'client',
        password: 'change',   // 'secret'
        name: 'client',
        id: '2133d32b'
    }
};

module.exports.validate = async (request, username, password, h) => {

    // if (username === 'help') {
    //     return { response: h.redirect('https://hapijs.com/help') };     // custom response
    // }

    const user = users[username];
    if (!user) {
        return { credentials: null, isValid: false };
    }

    // const isValid = await Bcrypt.compare(password, user.password)    ;
    const isValid = password === user.password;
    const credentials = { id: user.id, username: user.username };

    return { isValid, credentials };
};