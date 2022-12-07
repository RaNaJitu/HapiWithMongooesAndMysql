const Joi = require('joi')
const hapiI18n = require('hapi-i18n')
const service = require('../../mongodb/index');
const postShift = require('../../models/employee/index');


// const payload = Joi.object().keys({
//     title: Joi.object({
//       en: Joi.string().required().example('Cancellation & Returns').description(hapiI18n.postFaqApi.fieldsDescription.en)
//     }).unknown().required().description(hapiI18n.postFaqApi.fieldsDescription.title),
//     htmlContent: Joi.object({
//       en: Joi.string().required().example('Cancellation & Returns description').description(hapiI18n.postFaqApi.fieldsDescription.en)
//     }).unknown().description(hapiI18n.postFaqApi.fieldsDescription.htmlContent),
//     hasSubPoint: Joi.boolean().required().description(hapiI18n.postFaqApi.fieldsDescription.hasSubPoint),
//     parentId: Joi.string().max(24).min(24).allow('').description(hapiI18n.postFaqApi.fieldsDescription.parentId).example('5e255a7f0a213f24703b8a82')
//   })


//! HERE INSERTING DATA IN MySQL
// const APIHandler = async (request, h) => {
//     try {
//       const start = request.payload.start;
//             const end = request.payload.end;
//             await service.save({
//                 start: start,
//                 end: end,
//                 username: request.auth.credentials.username
//             });
            
//             let hours = ((end.valueOf() - start.valueOf()) /1000/60/60).toFixed(2);
            
//             return h.response({
//                 message: `Thanks You for entering your shift. Your shift was ${hours} hours`
//             }).code(201)
//     //   return h.response({ message: req.hapiI18n.__('postEmployeeApi').errorMsg['200'] }).code(200)
//     } catch (error) {
//       console.log('-------->>>>>>>>>>>employee post api Error :--->', error)
//       // return h.response({ message: request.hapiI18n.__('postEmployeeApi').errorMsg['500'] }).code(500)
//     }
//   }


//! HERE INSERTING DATA IN Mongoose 
const APIHandler = async (request, h) => {
  try {
    let text = request.payload.text;
    console.log('---text--', text);
    let newText = await postShift.insert({text});
    console.log('---newText--', newText);
    // newText.save();
    return h.response({
      message: `INSERTED SUCCESSFULLY -----  ${newText} `
    }).code(201)
  } catch (error) {
    console.log('-------->>>>>>>>>>>employee post api Error :--->', error)
  }
}


//   const responseCode = {
//     status: {
//       200: Joi.object({ message: Joi.any().example(hapiI18n.postFaqApi.errorMsg['200']).required().description(hapiI18n.postFaqApi.errorMsgDescription['200']) }),
//       500: Joi.object({ message: Joi.any().example(hapiI18n.postFaqApi.errorMsg['500']).required().description(hapiI18n.postFaqApi.errorMsgDescription['500']) }),
//       400: Joi.object({ message: Joi.any().example(hapiI18n.postFaqApi.errorMsg['400']).required().description(hapiI18n.postFaqApi.errorMsgDescription['400']) })
//     }
//  }// swagger response code


  module.exports = {  APIHandler }