import {
  CHANGE_FIELD,
  TOGGLE_LOGIN_FORM,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_SUCCESS,
  LOGIN_SUBMIT_ERROR,
  LOGIN_CHANGE_TEACHER,
  LOGIN_TEACHER_SUBMIT_ERROR,
  TOGGLE_MENU,
  CLOSE_MENU,
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
  message: '',
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
        message: '',
      };
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        loginOpened: !state.loginOpened,
        message: '',
      };
    case TOGGLE_MENU:
      return {
        ...state,
        opened: !state.opened,
      };
    case CLOSE_MENU:
      return {
        ...state,
        opened: false,
      };
    case LOGIN_SUBMIT:
      return {
        ...state,
        loading: true,
        message: '',
      };
    case LOGIN_CLASSES_SUBMIT:
      return {
        ...state,
        loading: true,
        message: '',
      };
    case LOGIN_SUBMIT_SUCCESS:
      return {
        ...state,
        isLogged: true,
        loading: false,
        password: '',
        message: '',
      };
    case LOGIN_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        username: '',
        password: '',
        message: action.payload,
      };
    case LOGIN_TEACHER_SUBMIT_ERROR:
        return {
          ...state,
          loading: false,
          username: '',
          password: '',
        };
    case LOGIN_CHANGE_TEACHER:
      return {
        ...state,
        teacher: !state.teacher,
        message: '',
        username: '',
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        username: '',
        password: '',
        loginOpened: false,
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
