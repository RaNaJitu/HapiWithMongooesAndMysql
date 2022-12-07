//! CONNECTION USING MONGOOSE
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/hapidb')
//     .then(() => console.log('MongoDB CONNECTED...'))
//     .catch(err => console.log(err));

// const Task = mongoose.model('Task', { text: String });

let client = null
let clientMongo

const connect = async () => {
    console.log('--clientMongo--', clientMongo);
    clientMongo = await mongoose.connect('mongodb://localhost:27017/hapidb').catch((err) => {
        console.log(`MongoDB error connecting to mongodb://localhost:27017/hapidb`)
      })
      console.log('MongoDB connected successfully -------------')
      client = clientMongo.db()
    console.log('--client---', client);
}


var db = {}
db.get = () => {
    if (client !== null) return client
    throw Error('Mongodb is not connected!')
}

const close = () => {
    clientMongo.close()
}


module.exports = { connect, db, close }









/ module.exports = { connect }



// // !  CONNECTION USING MYSQL
// const { Sequelize } = require('sequelize');
// var mysql = require('mysql');
// const dotenv = require('dotenv');
// const { append } = require('joi/lib/types/object');
// const { async } = require('rxjs');

// const sequelize = new Sequelize( {
//     // type: 'mysql',
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     dialect: 'mysql',
//     synchronize: true
// });




// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

// const Shift = sequelize.define('shift', {
//     id: {type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
//     start: Sequelize.DATE,
//     end: Sequelize.DATE,
//     enteredBy: Sequelize.STRING,
//     reviewedBy: {type:Sequelize.STRING, allowNull: true},
//     state: {
//         type: Sequelize.ENUM,
//         values: ['pending', 'approved', 'rejected']
//     }
// })

// // sequelize.sync();
// Shift.sync({forces: true});

// module.exports.save = async (input) => {
//         return await Shift.create({
//             state: 'pending',
//             start: input.start,
//             end: input.end,
//             enteredBy: input.username
//         });
// };


// module.exports.findAll = async () => {
//     return await Shift.findAll({
//             order: [['createdAt', 'DESC']]
//     })
// }