const Joi = require('joi')

module.exports = {

    createClassSchema: Joi.object({
    
        username: Joi.string().min(3).required(),
        password: Joi.string().pattern(/^[a-zA-Z0-9@$!%*?&-]*$/).min(3).required(),
        description: Joi.string().min(1).required(),
    
    }).required(),


    editClassSchema: Joi.object({
    
        username: Joi.string().min(3).allow('', null),,
        password: Joi.string().pattern(/^[a-zA-Z0-9@$!%*?&-]*$/).min(3).allow('', null),,
        description: Joi.string().min(1).allow('', null),
    
    }).required()

    
};