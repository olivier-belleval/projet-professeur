import {
  CHANGE_FIELD,
  TOGGLE_LOGIN_FORM,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_SUCCESS,
  LOGIN_SUBMIT_ERROR,
  LOGIN_CHANGE_TEACHER,
  TOGGLE_MENU,
} from '../action';

import {
  LOGOUT_SUCCESS,
  GET_CLASSES,
  GET_CLASSES_SUCCESS,
  LOGIN_CLASSES_SUBMIT,
} from '../action/user';

const initialState = {
  username: '',
  password: '',
  loginErrorMessage: '',
  loading: false,
  isLogged: false,
  loginOpened: false,
  teacher: false,
  classes: [],
  path: [
    'articles',
    'kanbans',
    'espace admin',
    'se déconnecter',
  ],
  opened: false,

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        loginOpened: !state.loginOpened,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        opened: !state.opened,
      };
    case LOGIN_SUBMIT || LOGIN_CLASSES_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUBMIT_SUCCESS:
      return {
        ...state,
        isLogged: true,
        loading: false,
        password: '',
        loginErrorMessage: '',
      };
    case LOGIN_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        username: action.payload,
        loginErrorMessage: action.payload,
      };
    case LOGIN_CHANGE_TEACHER:
      return {
        ...state,
        teacher: !state.teacher,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: !state.teacher,
        username: '',
        password: '',
      };
    case GET_CLASSES:
      return {
        ...state,
        loading: true,
      };
    case GET_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: [...action.payload],
      };
    default:
      return state;
  }
};
