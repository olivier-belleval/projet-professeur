export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';

export const login = () => ({
  type: LOGIN,
});

export const changeField = (payload) => ({
  type: CHANGE_FIELD,
  payload,
});
