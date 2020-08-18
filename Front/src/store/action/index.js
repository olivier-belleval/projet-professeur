export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';
//export const LOGIN = 'LOGIN';
export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const LOGIN_SUBMIT_ERROR = 'LOGIN_SUBMIT_ERROR';


// export const login = () => ({
//   type: LOGIN,
// });

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
