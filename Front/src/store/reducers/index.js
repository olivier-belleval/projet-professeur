import { LOGIN, CHANGE_FIELD, TOGGLE_LOGIN_FORM } from '../action';

const initialState = {
  username: '',
  password: '',
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
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        loginOpened: !state.loginOpened,
      }
    // case LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     isLogged: true,
    //     isClicked:false,
    //     username: '',
    //     password: '',
    //   };
    default:
      return state;
  }
};
