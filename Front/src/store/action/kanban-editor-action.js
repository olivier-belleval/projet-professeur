export const UPDATE_KANBAN_EDITOR_STATE = 'UPDATE_KANBAN_EDITOR_STATE';
export const CREATE_KANBAN_SUBMIT = 'CREATE_KANBAN_SUBMIT';
export const CREATE_KANBAN_SUCCESS = 'CREATE_KANBAN_SUCCESS';
export const CREATE_KANBAN_ERROR = 'CREATE_KANBAN_ERROR';
export const CANCEL_EDITING_KANBAN = 'CANCEL_EDITING_KANBAN';
export const SUBMIT_EDITED_KANBAN = 'SUBMIT_EDITED_KANBAN';
export const EDIT_KANBAN_ERROR = 'EDIT_KANBAN_ERROR';
export const EDIT_KANBAN_SUCCESS = 'EDIT_KANBAN_SUCCESS';

export const updateKanbanEditorState = (payload) => ({
  type: UPDATE_KANBAN_EDITOR_STATE,
  payload,
});

export const createKanbanSubmit = () => ({
  type: CREATE_KANBAN_SUBMIT,
});

export const createKanbanError = (payload) => ({
  type: CREATE_KANBAN_ERROR,
  payload,
});

export const createKanbanSuccess = (payload) => ({
  type: CREATE_KANBAN_SUCCESS,
  payload,
});

export const cancelEditingKanban = () => ({
  type: CANCEL_EDITING_KANBAN,
});

export const editKanbanSuccess = (payload) => ({
  type: EDIT_KANBAN_SUCCESS,
  payload,
});

export const editKanbanError = (payload) => ({
  type: EDIT_KANBAN_ERROR,
  payload,
});

export const submitEditedKanban = () => ({
  type: SUBMIT_EDITED_KANBAN,
});
