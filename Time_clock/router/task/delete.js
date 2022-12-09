const deleteShift = require('../../models/employee/index');
const mongoose = require('mongoose')


//! HERE UPDATING DATA IN Mongoose 
const APIHandler = async (request, h) => {
    try {
      console.log('req.query ==============> ', request.query)
      var mongoose = require('mongoose');
      // const id =  ObjectId(request.query.id);
      // 
        var id = mongoose.Types.ObjectId(request.query.id);
        console.log('---delete id--', id);
        let newText = await deleteShift.deleteData({ _id: id });
      return h.response({
        message: `DELETE SUCCESSFULLY -----  ${newText} `
      }).code(201)
    } catch (error) {
      console.log('-------- TASK DELETE api Error --->', error)
    }
  }

  module.exports = {  APIHandler }