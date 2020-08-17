export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
//export const LOGIN_SUBMIT_SUCCES = 'LOGIN_SUBMIT_SUCCES';

export const login = () => ({
  type: LOGIN,
});

export const changeField = (payload) => ({
  type: CHANGE_FIELD,
  payload,
});
