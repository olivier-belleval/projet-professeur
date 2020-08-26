const Joi = require('joi')

module.exports = Joi.object({
    
    username: Joi.string().min(3).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9@$!%*?&-]*$/).min(5).required()

}).required();