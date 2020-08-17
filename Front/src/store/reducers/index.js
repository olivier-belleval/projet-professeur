import { 
  CHANGE_FIELD,
  TOGGLE_LOGIN_FORM,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_SUCCESS,
  LOGIN_SUBMIT_ERROR,
} from '../action';

const initialState = {
  username: '',
  password: '',
  loginErrorMessage: '',
  loading: false,
  isLogged: false,
  loginOpened: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        loginOpened: !state.loginOpened,
      };
    case LOGIN_SUBMIT_SUCCESS:
      return {
        ...state,
        isLogged: true,
        loading: false,
        username: '',
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
    default:
      return state;
  }
};
