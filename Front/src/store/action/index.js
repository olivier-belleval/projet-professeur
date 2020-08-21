export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';
export const LOGIN_CHANGE_TEACHER = 'LOGIN_CHANGE_TEACHER';
export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const LOGIN_SUBMIT_ERROR = 'LOGIN_SUBMIT_ERROR';



export const loginSubmitSuccess = (payload) => ({
  type: LOGIN_SUBMIT_SUCCESS,
  payload,
});

export const loginSubmitError = (payload) => ({
  type: LOGIN_SUBMIT_ERROR,
  payload,
});

export const changeField = (payload) => ({
  type: CHANGE_FIELD,
  payload,
});

export const toggleLoginForm = () => ({
  type: TOGGLE_LOGIN_FORM,
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginChangeTeacher = () => ({
  type: LOGIN_CHANGE_TEACHER,
})
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const MODIFY_ARTICLE = 'MODIFY_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const JOIN_CLASS = 'JOIN_CLASS';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const modifyArticle = () => ({
  type: MODIFY_ARTICLE,
});

export const deleteArticle = () => ({
  type: DELETE_ARTICLE,
});

export const joinClass = () => ({
  type: JOIN_CLASS,
});

