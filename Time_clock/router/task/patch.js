const patchShift = require('../../models/employee/index');
const { ObjectId } = require('mongodb')

//! HERE UPDATING DATA IN Mongoose 
const APIHandler = async (request, h) => {
    try {
      let text = request.payload;
      const id =  ObjectId(request.query.id);
        let newText = await patchShift.update({ _id: id }, { $set: text });
      if(newText) {
        return h.response({
          message: `UPDATED SUCCESSFULLY -----  ${newText} `
        }).code(201)
      }
      console.log('--data not updated--');
    } catch (error) {
      console.log('-------- TASK PATCH api Error --->', error)
    }
  }

  module.exports = {  APIHandler }
  