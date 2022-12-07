const patchShift = require('../../models/employee/index');
const { ObjectId } = require('mongodb')

//! HERE UPDATING DATA IN Mongoose 
const APIHandler = async (request, h) => {
    try {
      let text = request.payload;
      const id =  ObjectId(request.query.id);
      console.log('---patch id--', id);
      console.log('---patch text--', text);
        let newText = await patchShift.update({ _id: id }, { $set: text });
      console.log('---patch newText--', newText);
      // newText.save();
      return h.response({
        message: `UPDATED SUCCESSFULLY -----  ${newText} `
      }).code(201)
    } catch (error) {
      console.log('-------->>>>>>>>>>>employee post api Error :--->', error)
    }
  }

  module.exports = {  APIHandler }
  