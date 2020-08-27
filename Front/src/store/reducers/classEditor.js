import {
  UPDATE_EDITOR_STATE,
  CREATE_CLASS_SUBMIT,
  CREATE_CLASS_ERROR,
  CREATE_CLASS_SUCCESS,

} from '../action/class-editor-action';
import {
  EDIT_CLASS,
} from '../action/AdminClass';

const initialState = {
  username: '',
  password: '',
  description: '',
  loading: false,
  message: '',
  send: false,
  id: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_EDITOR_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case CREATE_CLASS_SUBMIT:
      return {
        ...state,
        loading: true,
        message: '',
        send: true,
      };
    case CREATE_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        username: '',
        password: '',
        description: '',
        message: 'La classe a été ajouté !',
        send: false,
      };
    case CREATE_CLASS_ERROR:
      return {
        ...state,
        loading: false,
        message: 'Il y a eu une erreur à l\'envoi de votre classe',
        send: false,
      };
    case EDIT_CLASS:
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};
