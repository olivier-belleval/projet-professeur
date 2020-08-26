const Joi = require('joi')

module.exports = Joi.object({
    
    username: Joi.string().min(3),
    password: Joi.string().pattern(/^[a-zA-Z0-9@$!%*?&-]*$/).min(8),
    description: Joi.string().min(1)

}).required();