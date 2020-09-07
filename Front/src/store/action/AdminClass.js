
export const DELETE_CLASS = 'DELETE_CLASS';
export const DELETE_CLASS_SUCCESS = 'DELETE_CLASS_SUCCESS';
export const DELETE_CLASS_ERROR = 'DELETE_CLASS_ERROR';
export const EDIT_CLASS = 'EDIT_CLASS';
export const GET_CLASSES_ADMIN_PANEL = 'GET_CLASSES_ADMIN_PANEL';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS';
export const GET_CLASSES_ERROR = 'GET_CLASSES_ERROR';



export const deleteClass = (payload) => ({
  type: DELETE_CLASS,
  payload,
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

export const getClassesAdminPanel = () => ({
  type: GET_CLASSES_ADMIN_PANEL,
});


export const getClassesSuccess = (payload) => ({
  type: GET_CLASSES_SUCCESS,
  payload,
});

export const getClassesError = (payload) => ({
  type: GET_CLASSES_ERROR,
  payload,
});

