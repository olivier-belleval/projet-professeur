export const MODIFY_KANBAN = 'MODIFY_KANBAN';
export const DELETE_KANBAN = 'DELETE_KANBAN';
export const DELETE_KANBAN_SUCCESS = 'DELETE_KANBAN_SUCCESS';
export const DELETE_KANBAN_ERROR = 'DELETE_KANBAN_ERROR';
export const JOIN_CLASS = 'JOIN_CLASS';

export const modifyKanban = () => ({
  type: MODIFY_KANBAN,
});

export const deleteKanban = (payload) => ({
  type: DELETE_KANBAN,
  payload,
});

export const deleteKanbanSuccess = (payload) => ({
  type: DELETE_KANBAN_SUCCESS,
  payload,
});

export const deleteKanbanError = (payload) => ({
  type: DELETE_KANBAN_ERROR,
  payload,
});

export const joinClass = () => ({
  type: JOIN_CLASS,
});