export const DELETE_KANBAN = 'DELETE_KANBAN';
export const DELETE_KANBAN_SUCCESS = 'DELETE_KANBAN_SUCCESS';
export const DELETE_KANBAN_ERROR = 'DELETE_KANBAN_ERROR';
export const EDIT_KANBAN = 'EDIT_KANBAN';
export const JOIN_CLASS = 'JOIN_CLASS';
export const REMOVE_CLASS = 'REMOVE_CLASS';
export const REMOVE_CLASS_SUCCESS = 'REMOVE_CLASS_SUCCESS';
export const REMOVE_CLASS_ERROR = 'REMOVE_CLASS_ERROR';
export const REMOVED_CLASS = 'REMOVED_CLASS';

export const SUBMIT_ASSOCIATION_KANBAN = 'SUBMIT_ASSOCIATION_KANBAN';
export const ASSOCIATION_KANBAN_SUCCESS = 'ASSOCIATION_KANBAN_SUCCESS';
export const ASSOCIATION_KANBAN_ERROR = 'ASSOCIATION_KANBAN_ERROR';

export const modifyKanban = () => ({
  type: MODIFY_KANBAN,
});

export const deleteKanban = (payload) => ({
  type: DELETE_KANBAN,
  payload,
});

export const deleteKanbanSuccess = () => ({
  type: DELETE_KANBAN_SUCCESS,
});

export const deleteKanbanError = (payload) => ({
  type: DELETE_KANBAN_ERROR,
  payload,
});

export const joinClass = () => ({
  type: JOIN_CLASS,
});

export const editKanban = (payload) => ({
  type: EDIT_KANBAN,
  payload,
});

export const removeClass = (payload) => ({
  type: REMOVE_CLASS,
  payload,
});

export const removeClassSuccess = () => ({
  type: REMOVE_CLASS_SUCCESS,
});

export const removeClassError = (payload) => ({
  type: REMOVE_CLASS_ERROR,
  payload,
});

export const removedClass = (payload) => ({
  type: REMOVED_CLASS,
  payload,
});

export const submitAssociationKanban = () => ({
  type: SUBMIT_ASSOCIATION_KANBAN,
});

export const associationKanbanSuccess = (payload) => ({
  type: ASSOCIATION_KANBAN_SUCCESS,
  payload,
});

export const associationKanbanError = (payload) => ({
  type: ASSOCIATION_KANBAN_ERROR,
  payload,
});
