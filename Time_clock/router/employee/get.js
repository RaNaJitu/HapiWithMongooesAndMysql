const service = require('../../mongodb/index');
const getShift = require('../../models/employee/index');
const APIHandler = async (req, reply) => {
    try {
        // const data = await service.findAll();
        console.log('-->>>>>>>data12')
        const data = await getShift.read({});
        console.log('---------data-------',data)
        return data;
    } catch (error) {
        console.log('---error---', error);
    }
  }


  module.exports = {  APIHandler }