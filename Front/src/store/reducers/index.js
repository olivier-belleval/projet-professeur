import { LOGIN, CHANGE_FIELD } from '../action';

const initialState = {
  username: 'toto',
  password: 'tata',
  isLogged: false,

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    // case LOGIN:
    //   return {
    //     ...state,
    //     isLogged: true,
    //     username: '',
    //     password: '',
    //   };
    default:
      return state;
  }
};
