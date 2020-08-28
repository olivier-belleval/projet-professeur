export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const GET_CLASSES = 'GET_CLASSES';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS';
export const GET_CLASSES_ERROR = 'GET_CLASSES_ERROR';
export const LOGIN_CLASSES_SUBMIT = 'LOGIN_CLASSES_SUBMIT';

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const getClassesSuccess = (payload) => ({
  type: GET_CLASSES_SUCCESS,
  payload,
});

export const getClasses = () => ({
  type: GET_CLASSES,
});

export const getClassesError = (payload) => ({
  type: GET_CLASSES_ERROR,
  payload,
});

export const loginClassesSubmit = () => ({
  type: LOGIN_CLASSES_SUBMIT,
});
