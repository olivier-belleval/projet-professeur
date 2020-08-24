export const MODIFY_KANBAN = 'MODIFY_KANBAN';
export const DELETE_KANBAN = 'DELETE_KANBAN';
export const JOIN_CLASS = 'JOIN_CLASS';

export const modifyKanban = () => ({
  type: MODIFY_KANBAN,
});

export const deleteKanban = () => ({
  type: DELETE_KANBAN,
});

export const joinClass = () => ({
  type: JOIN_CLASS,
});
