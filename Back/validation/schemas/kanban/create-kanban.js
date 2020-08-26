const Joi = require('joi')

module.exports = Joi.object({
    
    title: Joi.string().min(3).required(),
    description: Joi.string().required(),
    background: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).allow('', null)

}).required();