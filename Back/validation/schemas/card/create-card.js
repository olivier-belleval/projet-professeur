const Joi = require('joi')

module.exports = Joi.object({
    
    order: Joi.number().integer().min(1).required(),
    listId: Joi.number().integer().min(1),
    color: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)

}).required();