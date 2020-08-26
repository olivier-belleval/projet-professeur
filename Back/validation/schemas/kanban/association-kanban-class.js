const Joi = require('joi')

module.exports = Joi.object({
    
    classId: Joi.number().integer().min(1).required()

}).required();