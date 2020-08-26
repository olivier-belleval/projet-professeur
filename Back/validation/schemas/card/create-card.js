const Joi = require('joi')

module.exports = Joi.object({
    
    order: Joi.number().integer().min(1).required(),
    description: Joi.string().min(1).required(),
    color: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).allow('', null)

}).required();