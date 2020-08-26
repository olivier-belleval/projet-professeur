const Joi = require('joi')

module.exports = Joi.object({
    
    title: Joi.string().min(3),
    description: Joi.string()

}).required();