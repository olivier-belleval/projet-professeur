export const UPDATE_EDITOR_STATE = 'UPDATE_EDITOR_STATE';
export const CREATE_CLASS_SUBMIT = 'CREATE_CLASS_SUBMIT';
export const CREATE_CLASS_SUCCESS = 'CREATE_CLASS_SUCCESS';
export const CREATE_CLASS_ERROR = 'CREATE_CLASS_ERROR';

export const updateEditorState = (payload) => ({
  type: UPDATE_EDITOR_STATE,
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
