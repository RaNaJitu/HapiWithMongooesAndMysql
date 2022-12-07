const { async } = require('rxjs')
const tableName = 'tasks'
const { ObjectId } = require('mongodb')
// const {db} = require('../../mongodb')
const { Task } = require('../../mongodb/index')

//! THIS  DATA COME FROM MYSQL

// const read = async () => {
//     return await db.findAll({
//         order: [['createdAt', 'DESC']]
//     })
// }



// const read = (data) =>  db.get().collection(tableName).find().toArray();

// const read = async (req, h) => {
  
  //   const movie = await req.mongo.db.collection('tasks').findOne({});
  
  //   return movie;
  // }
  // const read = req.mongo.db.collection('tasks').findOne({});

  const read = () =>  Task.find().exec();

const insert = (data) => {
  console.log('--data>>>>>>>>>>---', data);
  return Task.create(data);
};

const update = (condition, data) => {
  console.log('--patch condition>>>>>>>>>>---', condition);
  console.log('--patch data>>>>>>>>>>---', data);
  return Task.updateOne(condition, data);
};


const deleteData = (condition) => {
  console.log('--delete condition>>>>>>>>>>---', condition);
  console.log('--patch data>>>>>>>>>>---', Task);
  // Task.deleteOne({"_id" : ObjectId("638f4be4c3a4f58acdf299b7")});
  return Task.deleteOne(condition);
  // Task.deleteMany({"text" : "my task five"});
};

module.exports = {
    read,
    insert,
    update,
    deleteData,
}