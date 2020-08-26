const Joi = require('joi')

module.exports = Joi.object({
    
    name: Joi.string().min(3),
    color: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)

}).required();