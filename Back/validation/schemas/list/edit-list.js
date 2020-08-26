const Joi = require('joi')

module.exports = Joi.object({
    
    name: Joi.string().min(3).allow('', null),
    order: Joi.number().integer().min(1).allow('', null)

}).required();