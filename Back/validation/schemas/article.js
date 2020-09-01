const Joi = require('joi')

module.exports = {


    createArticleSchema: Joi.object({
    
        title: Joi.string().min(3).required(),
        content: Joi.string().min(1).required()
        
    }).required(),


    editArticleSchema: Joi.object({
    
        title: Joi.string().allow('', null),
        content: Joi.string().allow('', null)
        
    }),

    
    associationArticleClassSchema: Joi.object({
    
        className: Joi.string().min(3).required()
        
    }).required()

};