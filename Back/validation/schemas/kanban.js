const Joi = require('joi')

module.exports = {


    createKanbanSchema: Joi.object({

        title: Joi.string().min(3).required(),
        description: Joi.string().required(),
        background: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).allow('', null)

    }).required(),


    editKanbanSchema: Joi.object({
    
        title: Joi.string().min(3).allow('', null),
        description: Joi.string().allow('', null),
        background: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).allow('', null)
    
    }).required(),


    associationKanbanClassSchema: Joi.object({
    
        classId: Joi.number().integer().min(1).required()
    
    }).required(),


    createListSchema: Joi.object({
    
        name: Joi.string().min(3).required(),
        order: Joi.number().integer().min(1).required()
    
    }).required(),


    editListSchema: Joi.object({
    
        name: Joi.string().min(3).allow('', null),
        order: Joi.number().integer().min(1).allow('', null)
    
    }).required(),


    createCardSchema: Joi.object({
    
        order: Joi.number().integer().min(1).required(),
        description: Joi.string().min(1).required(),
        color: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).allow('', null)
    
    }).required(),

    
    editCardSchema: Joi.object({
    
        order: Joi.number().integer().min(1).allow('', null),
        description: Joi.string().min(1).allow('', null),
        color: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).allow('', null)
    
    }).required(),


    createTagSchema: Joi.object({
    
        name: Joi.string().min(3).required(),
        color: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).allow('', null)
    
    }).required(),


    editTagSchema: Joi.object({
    
        name: Joi.string().min(3).allow('', null),
        color: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).allow('', null)
    
    }).required()

};