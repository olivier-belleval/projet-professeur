const Joi = require('joi')

module.exports = Joi.object({
    
    title: Joi.string().allow('', null),
    content: Joi.string().allow('', null)
    
});