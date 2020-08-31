const express = require("express");
const router = express.Router();

const teacherMW = require('../../middlewares/teacherMW');

// Import des schémas
const { validateBody } = require('../../validation/validator');
const { createKanbanSchema, editKanbanSchema, associationKanbanClassSchema, createListSchema, editListSchema, createCardSchema, editCardSchema, createTagSchema, editTagSchema} = require('../../validation/schemas/kanban');

const kanbanController = require('../../controllers/kanbanController');

// routes pour les kanbans

router.get('/all', kanbanController.getAllKanbans);
router.get('/:id(\\d+)', kanbanController.getOneKanbansById);
router.post('/create', teacherMW.isATeacher, validateBody(createKanbanSchema), kanbanController.createKanban);
router.put('/:id(\\d+)/edit', teacherMW.isATeacher, validateBody(editKanbanSchema), kanbanController.editKanban);
router.delete('/:id(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteKanban);

router.post('/:kanbanId(\\d+)/associate', teacherMW.isATeacher, validateBody(associationKanbanClassSchema), kanbanController.associateClassToKanban);
router.post('/:id(\\d+)/associate/remove', teacherMW.isATeacher, validateBody(associationKanbanClassSchema), kanbanController.removeAssociationClassToKanban);

// routes pour les listes

router.get('/:kanbanId(\\d+)/list/:listId(\\d+)', teacherMW.isATeacher, kanbanController.getOneListById);
router.post('/:id(\\d+)/list/create', teacherMW.isATeacher, validateBody(createListSchema), kanbanController.createList);
router.put('/:kanbanId(\\d+)/list/:listId(\\d+)/edit', teacherMW.isATeacher, validateBody(editListSchema), kanbanController.editList);
router.delete('/:kanbanId(\\d+)/list/:listId(\\d+)/delete', teacherMW.isATeacher, kanbanController.deletelist);

// routes pour les cartes

router.get('/list/:listId(\\d+)/card/:cardId(\\d+)', teacherMW.isATeacher, kanbanController.getOneCardById);
router.post('/list/:id(\\d+)/card/create', teacherMW.isATeacher, validateBody(createCardSchema), kanbanController.createCard);
router.put('/list/:listId(\\d+)/card/:cardId(\\d+)/edit',teacherMW.isATeacher, validateBody(editCardSchema), kanbanController.editCard);
router.delete('/list/:listId(\\d+)/card/:cardId(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteCard);

// routes pour les tags

router.get('/tag/all', teacherMW.isATeacher, kanbanController.getAllTags);
router.get('/tag/:id(\\d+)', teacherMW.isATeacher, kanbanController.getOneTagById);
router.post('/tag/create', validateBody(createTagSchema), teacherMW.isATeacher, kanbanController.createTag);
router.put('/tag/:id(\\d+)/edit', teacherMW.isATeacher, validateBody(editTagSchema), kanbanController.editTag);
router.delete('/tag/:id(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteTag);

router.post('/card/:cardId(\\d+)/tag/:tagId(\\d+)/add', teacherMW.isATeacher, kanbanController.createAssociationTagToCard);
router.delete('/card/:cardId(\\d+)/tag/:tagId(\\d+)/remove', teacherMW.isATeacher, kanbanController.deleteAssociationTagToCard);


module.exports = router;