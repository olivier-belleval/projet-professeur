const Joi = require('joi')

module.exports = Joi.object({
    
    title: Joi.string().min(3).required(),
    content: Joi.string().min(1).required()
    
}).required();