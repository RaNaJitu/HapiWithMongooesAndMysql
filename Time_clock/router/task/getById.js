const service = require('../../mongodb/index');
const getByIdShift = require('../../models/employee/index');
const { ObjectId } = require('mongodb')
const APIHandler = async (req, h) => {
    try {
        // const data = await service.findAll();
        // console.log('-->>>>>>>data12')
        // const data = await getShift.read({});
        // console.log('---------data-------',data)
        // return data;
        const id = ObjectId(req.params.id)
        const responseData = await getByIdShift.getByIdShift(id)
        console.log('---responseData--', responseData);
        return h.response(`---id---${responseData}`);
    } catch (error) {
        console.log('---error---', error);
    }
  }


  module.exports = {  APIHandler }