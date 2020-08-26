const Joi = require('joi')

module.exports = Joi.object({
    
    name: Joi.string().min(3),
    order: Joi.number().integer().min(1)

}).required();