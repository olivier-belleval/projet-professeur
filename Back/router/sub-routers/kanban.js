const express = require("express");
const router = express.Router();

const teacherMW = require('../../middlewares/teacherMW');

// Import des schémas
const { validateBody } = require('../../validation/validator');
const { createKanbanSchema, editKanbanSchema, associationKanbanClassSchema, createListSchema, editListSchema, createCardSchema, editCardSchema, createTagSchema, editTagSchema} = require('../../validation/schemas/kanban');

const kanbanController = require('../../controllers/kanbanController');

/**
 * @swagger
 * tags:
 *   - name: Kanban
 *     description: kanban management
 */

/**
 * @swagger 
 *  /api/kanban/all:
 *   get:
 *     description: Returns all kanbans
 *     tags: [Kanban]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Array of all kanbans
 *         schema:
 *          $ref: '#/definitions/AllKanbans'
 *       500:
 *          description: Internal Server Error
 * 
 */

router.get('/all', kanbanController.getAllKanbans);

/**
 * @swagger
 * /api/kanban/{id}:
 *   get:
 *     description: Returns one kanban
 *     tags: [Kanban]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/kanbanId'
 *     responses:
 *       200:
 *         description: Displays one kanban
 *         schema:
 *          $ref: '#/definitions/AllKanbans'
 *       400:
 *          description: Cannot find kanban with id {id}
 *       401:
 *          description: Unauthorized - You must be logged in order to continue
 *       500:
 *          description: Internal Server Error
 */

router.get('/:id(\\d+)', kanbanController.getOneKanbansById);

/**
 * @swagger
 * /api/kanban/create:
 *   post:
 *     description: Create a new kanban
 *     tags: [Kanban]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/title'
 *       - $ref: '#/parameters/description'
 *       - $ref: '#/parameters/background'
 *       - $ref: '#/parameters/teacherId'
 *     responses:
 *       200:
 *         description: kanban has been created
 *         schema:
 *          $ref: '#/definitions/KanbanCreate'
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 */

router.post('/create', teacherMW.isATeacher, validateBody(createKanbanSchema), kanbanController.createKanban);

/**
 * @swagger
 * /api/kanban/{id}/edit:
 *   put:
 *     description: Edit a kanban
 *     tags: [Kanban]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/kanbanId'
 *       - $ref: '#/parameters/title'
 *       - $ref: '#/parameters/description'
 *       - $ref: '#/parameters/background'
 *       - $ref: '#/parameters/teacherId'
 *     responses:
 *       200:
 *         description: Kanban has been edited
 *         schema:
 *          $ref: '#/definitions/KanbanEdit'
 *       400:
 *          description: All fields are empty
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 */

router.put('/:id(\\d+)/edit', teacherMW.isATeacher, validateBody(editKanbanSchema), kanbanController.editKanban);

/**
 * @swagger
 * /api/kanban/{id}/delete:
 *   delete:
 *     description: Delete a kanban
 *     tags: [Kanban]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/kanbanId'
 *     responses:
 *       200:
 *         description: Kanban has been deleted
 *         schema:
 *          $ref: '#/definitions/KanbanDelete'
 *       400:
 *          description: Failed to delete kanban with id {id}
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 */
router.delete('/:id(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteKanban);

/**
 * @swagger
 * /api/kanban/{id}/associate:
 *   post:
 *     description: Associate a class to a kanban
 *     tags: [Kanban]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/kanbanId'
 *       - in: body
 *         name: classId
 *         description: id of the class
 *         schema:
 *              type: object
 *              properties:
 *                  classId:
 *                      type:  integer
 *                      example: 1
 *         required: true
 *     responses:
 *       200:
 *         description: Association created
 *         schema:
 *          type: object
 *          properties:
 *              message:
 *                  type:  string
 *                  example: Association has been successfully added.
 *              data:
 *                  $ref: '#/definitions/association_class_to_kanban'
 *       400:
 *          description: Association failed
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 */

router.post('/:kanbanId(\\d+)/associate', teacherMW.isATeacher, validateBody(associationKanbanClassSchema), kanbanController.associateClassToKanban);

/**
 * @swagger
 * /api/kanban/{id}/associate/remove:
 *   delete:
 *     description: Remove an association class/kanban
 *     tags: [Kanban]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/kanbanId'
 *       - in: body
 *         name: classId
 *         description: id of the class
 *         schema:
 *              type: object
 *              properties:
 *                  classId:
 *                      type:  integer
 *                      example: 1
 *         required: true
 *     responses:
 *       200:
 *         description: Association deleted
 *         schema:
 *          type: object
 *          properties:
 *              message:
 *                  type:  string
 *                  example: Association has been successfully deleted.
 *              data:
 *                  $ref: '#/definitions/association_class_to_kanban'
 *       400:
 *          description: Failed to remove association
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 */
router.post('/:id(\\d+)/associate/remove', teacherMW.isATeacher, validateBody(associationKanbanClassSchema), kanbanController.removeAssociationClassToKanban);


/**
 * @swagger 
 *  /api/kanban/{kanbanId}/list/{listId}:
 *   get:
 *     description: Returns a list from a kanban
 *     tags: [Kanban > list]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/kanbanId'
 *       - $ref: '#/parameters/listId'
 *     responses:
 *       200:
 *         description: Selected list is displayed
 *         schema:
 *          $ref: '#/definitions/listFromKanban'
 *       400:
 *          description: Cannot find list with id {id}
 *       401:
 *          description: Unauthorized - You must be logged in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.get('/:kanbanId(\\d+)/list/:listId(\\d+)', teacherMW.isATeacher, kanbanController.getOneListById);

/**
 * @swagger 
 *  /api/kanban/{kanbanId}/list/create:
 *   post:
 *     description: Create a list in a kanban
 *     tags: [Kanban > list]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/kanbanId'
 *       - in: body
 *         name: name
 *         description: name of the list
 *         schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type:  string
 *                      example: name of the list
 *         required: true
 *       - in: body
 *         name: order
 *         description: order of the list
 *         schema:
 *              type: object
 *              properties:
 *                  order:
 *                      type:  integer
 *                      example: 1
 *         required: true   
 *     responses:
 *       200:
 *         description: Selected list is displayed
 *         schema:
 *          $ref: '#/definitions/createList'
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.post('/:id(\\d+)/list/create', teacherMW.isATeacher, validateBody(createListSchema), kanbanController.createList);

/**
 * @swagger 
 *  /api/kanban/{kanbanId}/list/edit:
 *   put:
 *     description: Edit a list in a kanban
 *     tags: [Kanban > list]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/kanbanId'
 *       - in: body
 *         name: name
 *         description: name of the list
 *         schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type:  string
 *                      example: name of the list
 *         required: true
 *       - in: body
 *         name: order
 *         description: order of the list
 *         schema:
 *              type: object
 *              properties:
 *                  order:
 *                      type:  integer
 *                      example: 1
 *         required: true  
 *     responses:
 *       200:
 *         description: Edited list is displayed
 *         schema:
 *          $ref: '#/definitions/listFromKanban'
 *       400:
 *          description: All fields are empty
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.put('/:kanbanId(\\d+)/list/:listId(\\d+)/edit', teacherMW.isATeacher, validateBody(editListSchema), kanbanController.editList);

/**
 * @swagger 
 *  /api/kanban/{kanbanId}/list/{listId}/delete:
 *   delete:
 *     description: Delete a list from a kanban
 *     tags: [Kanban > list]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/kanbanId'
 *       - $ref: '#/parameters/listId'
 *     responses:
 *       200:
 *         description: Deleted list is displayed
 *         schema:
 *          $ref: '#/definitions/listDelete'
 *       400:
 *          description: Failed to delete list with id {id}
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.delete('/:kanbanId(\\d+)/list/:listId(\\d+)/delete', teacherMW.isATeacher, kanbanController.deletelist);


/**
 * @swagger 
 *  /api/kanban/list/{listId}/card/{cardId}:
 *   get:
 *     description: Returns a card from a list
 *     tags: [Kanban > card]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/listId'
 *       - $ref: '#/parameters/cardId'
 *     responses:
 *       200:
 *         description: Selected card is displayed
 *         schema:
 *          $ref: '#/definitions/cardFromList'
 *       400:
 *          description: Failed to find card with id {id}
 *       401:
 *          description: Unauthorized - You must be logged in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.get('/list/:listId(\\d+)/card/:cardId(\\d+)', teacherMW.isATeacher, kanbanController.getOneCardById);

/**
 * @swagger 
 *  /api/kanban/list/{listId}/card/create:
 *   post:
 *     description: Create a card from a list
 *     tags: [Kanban > card]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/listId'
 *       - $ref: '#/parameters/cardId'
 *       - in: body
 *         name: description
 *         description: description of the card
 *         schema:
 *              type: object
 *              properties:
 *                  description:
 *                      type:  string
 *                      example: card 1 from list 1
 *         required: true
 *       - in: body
 *         name: order
 *         description: order of the card
 *         schema:
 *              type: object
 *              properties:
 *                  order:
 *                      type:  integer
 *                      example: 1
 *         required: true
 *     responses:
 *       200:
 *         description: Created card is displayed
 *         schema:
 *          $ref: '#/definitions/cardCreate'
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.post('/list/:id(\\d+)/card/create', teacherMW.isATeacher, validateBody(createCardSchema), kanbanController.createCard);

/**
 * @swagger 
 *  /api/kanban/list/{listId}/card/{cardId}/edit:
 *   put:
 *     description: Edit a card from a list
 *     tags: [Kanban > card]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/listId'
 *       - $ref: '#/parameters/cardId'
 *       - in: body
 *         name: description
 *         description: description of the card
 *         schema:
 *              type: object
 *              properties:
 *                  description:
 *                      type:  string
 *                      example: card 1 from list 1
 *         required: true
 *       - in: body
 *         name: order
 *         description: order of the card
 *         schema:
 *              type: object
 *              properties:
 *                  order:
 *                      type:  integer
 *                      example: 1
 *         required: true
 *     responses:
 *       200:
 *         description: Edited card is displayed
 *         schema:
 *          $ref: '#/definitions/cardEdit'
 *       400:
 *          description: All fields are empty
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.put('/list/:listId(\\d+)/card/:cardId(\\d+)/edit',teacherMW.isATeacher, validateBody(editCardSchema), kanbanController.editCard);

/**
 * @swagger 
 *  /api/kanban/list/{listId}/card/{cardId}/delete:
 *   delete:
 *     description: Delete a card from a list
 *     tags: [Kanban > card]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/listId'
 *       - $ref: '#/parameters/cardId'
 *     responses:
 *       200:
 *         description: Deleted card is displayed
 *         schema:
 *          $ref: '#/definitions/cardDelete'
 *       400:
 *          description: Failed to delete card with id {id}
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.delete('/list/:listId(\\d+)/card/:cardId(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteCard);

/**
 * @swagger 
 *  /api/tag/all:
 *   get:
 *     description: Returns all tags
 *     tags: [Kanban > tag]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Array of all tags
 *         schema:
 *          $ref: '#/definitions/allTags'
 *       401:
 *          description: Unauthorized - You must be logged in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.get('/tag/all', teacherMW.isATeacher, kanbanController.getAllTags);

/**
 * @swagger 
 *  /api/tag/{id}:
 *   get:
 *     description: Returns a tag
 *     tags: [Kanban > tag]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/tagId'
 *     responses:
 *       200:
 *         description: Displays the selected tag
 *         schema:
 *          $ref: '#/definitions/allTags'
 *       400:
 *          description: Failed to delete kanban with id {id}
 *       401:
 *          description: Unauthorized - You must be logged in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.get('/tag/:id(\\d+)', teacherMW.isATeacher, kanbanController.getOneTagById);

/**
 * @swagger 
 *  /api/tag/{id}/create:
 *   post:
 *     description: Creates a tag
 *     tags: [Kanban > tag]
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: name
 *         description: name of the tag
 *         schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type:  string
 *                      example: tag 1
 *         required: true
 *       - in: body
 *         name: color
 *         description: color of the tag
 *         schema:
 *              type: object
 *              properties:
 *                  color:
 *                      type:  string
 *                      example: '#FFF'
 *         required: false
 *     responses:
 *       200:
 *         description: Displays the selected tag
 *         schema:
 *          $ref: '#/definitions/allTags'
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.post('/tag/create', validateBody(createTagSchema), teacherMW.isATeacher, kanbanController.createTag);

/**
 * @swagger 
 *  /api/tag/{id}/edit:
 *   put:
 *     description: Edits a tag
 *     tags: [Kanban > tag]
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: name
 *         description: name of the tag
 *         schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type:  string
 *                      example: tag 1
 *         required: true
 *       - in: body
 *         name: color
 *         description: color of the tag
 *         schema:
 *              type: object
 *              properties:
 *                  color:
 *                      type:  string
 *                      example: '#FFF'
 *         required: false
 *     responses:
 *       200:
 *         description: Displays the edited tag
 *         schema:
 *          $ref: '#/definitions/allTags'
 *       400:
 *          description: All fields are empty
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.put('/tag/:id(\\d+)/edit', teacherMW.isATeacher, validateBody(editTagSchema), kanbanController.editTag);

/**
 * @swagger 
 *  /api/tag/{id}/delete:
 *   delete:
 *     description: Deletes a tag
 *     tags: [Kanban > tag]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/tagId'
 *     responses:
 *       200:
 *         description: Displays the deleted tag
 *         schema:
 *          $ref: '#/definitions/allTags'
 *       400:
 *          description: Failed to delete tag with id {id}
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 * 
 */

router.delete('/tag/:id(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteTag);

/**
 * @swagger
 * /api/kanban/card/{cardId}/tag/{tagId}/add:
 *   post:
 *     description: Associate a tag to a card
 *     tags: [Kanban > tag]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/cardId'
 *       - $ref: '#/parameters/tagId'
 *       - in: body
 *         name: classId
 *         description: id of the class
 *         schema:
 *              type: object
 *              properties:
 *                  classId:
 *                      type:  integer
 *                      example: 1
 *         required: true
 *     responses:
 *       200:
 *         description: Association created
 *         schema:
 *          type: object
 *          properties:
 *              message:
 *                  type:  string
 *                  example: Association has been successfully added.
 *              data:
 *                  $ref: '#/definitions/association_tag_to_card'
 *       400:
 *          description: Association failed
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 */

router.post('/card/:cardId(\\d+)/tag/:tagId(\\d+)/add', teacherMW.isATeacher, kanbanController.createAssociationTagToCard);

/**
 * @swagger
 * /api/kanban/card/{cardId}/tag/{tagId}/remove:
 *   delete:
 *     description: Remove association tag/card
 *     tags: [Kanban > tag]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/cardId'
 *       - $ref: '#/parameters/tagId'
 *     responses:
 *       200:
 *         description: Association removed
 *         schema:
 *          type: object
 *          properties:
 *              message:
 *                  type:  string
 *                  example: Association has been successfully removed.
 *              data:
 *                  $ref: '#/definitions/association_tag_to_card'
 *       400:
 *          description: Failed to remove association
 *       401:
 *          description: Unauthorized - You must be logged as a teacher in order to continue
 *       500:
 *          description: Internal Server Error
 */

router.delete('/card/:cardId(\\d+)/tag/:tagId(\\d+)/remove', teacherMW.isATeacher, kanbanController.deleteAssociationTagToCard);


module.exports = router;