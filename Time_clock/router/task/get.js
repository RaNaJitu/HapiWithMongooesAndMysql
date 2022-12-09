const service = require('../../mongodb/index');
const getShift = require('../../models/employee/index');
const APIHandler = async (req, reply) => {
    try {
        // const data = await service.findAll();
        const data = await getShift.read({});
        return data;
    } catch (error) {
        console.log('---error---', error);
    }
  }


  module.exports = {  APIHandler }