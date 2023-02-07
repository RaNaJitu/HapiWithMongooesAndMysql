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

//! end for my SQL query

// const read = (data) =>  db.get().collection(tableName).find().toArray();

// const read = async (req, h) => {
  
  //   const movie = await req.mongo.db.collection('tasks').findOne({});
  
  //   return movie;
  // }
  // const read = req.mongo.db.collection('tasks').findOne({});

  const read = () =>  Task.find().exec();

const insert = (data) => {
  console.log('--data>>>>>>>>>>---', data);
  const responseData = Task.create(data);
  // const reeData = Task(data);
  // const responseData = reeData.save();
  return responseData;
};

const update = (condition, data) => {
  return Task.updateOne(condition, data);
};


const deleteData = (condition) => {
  return Task.deleteOne(condition);
  // return Task.deleteOne({"text" : "my task five"});
};

const getByIdShift = (condition) => Task.find(condition).exec();

module.exports = {
    read,
    insert,
    update,
    deleteData,
    getByIdShift,
}