export const MODIFY_CLASS = 'MODIFY_CLASS';
export const DELETE_CLASS = 'DELETE_CLASS';
export const DELETE_CLASS_SUCCESS = 'DELETE_CLASS_SUCCESS';
export const DELETE_CLASS_ERROR = 'DELETE_CLASS_ERROR';
export const EDIT_CLASS = 'EDIT_CLASS';

export const modifyClass = () => ({
  type: MODIFY_CLASS,
});

export const deleteClass = () => ({
  type: DELETE_CLASS,
});

export const deleteClassSuccess = () => ({
  type: DELETE_CLASS_SUCCESS,
});

export const deleteClassError = () => ({
  type: DELETE_CLASS_ERROR,
});

export const editClass = (payload) => ({
  type: EDIT_CLASS,
  payload,
});
