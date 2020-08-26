const Joi = require('joi')

module.exports = Joi.object({
    
    title: Joi.string().min(3).allow('', null),
    description: Joi.string().allow('', null),
    background: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).allow('', null)

}).required();