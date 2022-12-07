//! CONNECTION USING MONGOOSE
const Mongoose = require('mongoose');
const {  Schema, model } = require('mongoose');
const Hapi = require('hapi');

// Mongoose.connect('mongodb://localhost:27017/hapidb')
//     .then(() => console.log('MongoDB CONNECTED...'))
//     .catch(err => console.log(err));

// const Task = Mongoose.model('Task', { text: String });
// module.exports = { Task }

//*********************************************************************************************** */

//! HERE WE ARE TRYING TO CONNECT DATABASE LIKE LE-OFFER PROJECT 
let client = null
let clientMongo



const connect = async () => {
    console.log('--clientMongo--', clientMongo);
    clientMongo = await Mongoose.connect('mongodb://localhost:27017/hapidb', { useNewUrlParser: true }).catch((err) => {
        console.log(`MongoDB error connecting to mongodb://localhost:27017/hapidb ${err}`)
      })
      console.log('MongoDB connected successfully -------------')
    //   client = clientMongo.db()
    // console.log('--client---', client);
}

const testSchema = new Schema({
    test: {
        type: String,
        require: true
    }
})

// const Task = Mongoose.model('tasks', { text: String });
const Task = model('tasks', testSchema);
console.log('----Task----', Task);
connect();
var db = {}
db.get = () => {
    if (client !== null) return client
    throw Error('Mongodb is not connected!')
}

const close = () => {
    clientMongo.close()
}


module.exports = { connect, db, close, Task}
