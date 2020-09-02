export const UPDATE_CLASS_EDITOR_STATE = 'UPDATE_CLASS_EDITOR_STATE';
export const CREATE_CLASS_SUBMIT = 'CREATE_CLASS_SUBMIT';
export const CREATE_CLASS_SUCCESS = 'CREATE_CLASS_SUCCESS';
export const CREATE_CLASS_ERROR = 'CREATE_CLASS_ERROR';
export const CANCEL_EDITING_CLASS = 'CANCEL_EDITING_CLASS';
export const SUBMIT_EDITED_CLASS = 'SUBMIT_EDITED_CLASS';
export const EDIT_CLASS_ERROR = 'EDIT_CLASS_ERROR';
export const EDIT_CLASS_SUCCESS = 'EDIT_CLASS_SUCCESS';

export const updateClassEditorState = (payload) => ({
  type: UPDATE_CLASS_EDITOR_STATE,
  payload,
});

export const createClassSubmit = () => ({
  type: CREATE_CLASS_SUBMIT,
});

export const createClassError = (payload) => ({
  type: CREATE_CLASS_ERROR,
  payload,
});

export const createClassSuccess = (payload) => ({
  type: CREATE_CLASS_SUCCESS,
  payload,
});

export const cancelEditingClass = () => ({
  type: CANCEL_EDITING_CLASS,
});

export const editClassSuccess = (payload) => ({
  type: EDIT_CLASS_SUCCESS,
  payload,
});

export const editClassError = (payload) => ({
  type: EDIT_CLASS_ERROR,
  payload,
});

export const submitEditedClass = () => ({
  type: SUBMIT_EDITED_CLASS,
});
