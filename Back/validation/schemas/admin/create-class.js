const Joi = require('joi')

module.exports = Joi.object({
    
    username: Joi.string().min(3).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9@$!%*?&-]*$/).min(8).required(),
    description: Joi.string().min(1).required(),

}).required();
