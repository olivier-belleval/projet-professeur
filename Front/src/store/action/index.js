export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
//export const LOGIN_SUBMIT_SUCCES = 'LOGIN_SUBMIT_SUCCES';

export const login = () => ({
  type: LOGIN,
});

export const changeField = (payload) => ({
  type: CHANGE_FIELD,
  payload,
});

export const toggleLoginForm = () => ({
  type: TOGGLE_LOGIN_FORM,
})
