export const UPDATE_KANBAN_EDITOR_STATE = 'UPDATE_KANBAN_EDITOR_STATE';
export const CREATE_KANBAN_SUBMIT = 'CREATE_KANBAN_SUBMIT';
export const CREATE_KANBAN_SUCCESS = 'CREATE_KANBAN_SUCCESS';
export const CREATE_KANBAN_ERROR = 'CREATE_KANBAN_ERROR';

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
