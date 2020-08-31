export const MODIFY_KANBAN = 'MODIFY_KANBAN';
export const DELETE_KANBAN = 'DELETE_KANBAN';
export const DELETE_KANBAN_SUCCESS = 'DELETE_KANBAN_SUCCESS';
export const DELETE_KANBAN_ERROR = 'DELETE_KANBAN_ERROR';
export const EDIT_KANBAN = 'EDIT_KANBAN';
export const JOIN_CLASS = 'JOIN_CLASS';

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
