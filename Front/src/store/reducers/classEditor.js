import {
  UPDATE_CLASS_EDITOR_STATE,
  CREATE_CLASS_SUBMIT,
  CREATE_CLASS_ERROR,
  CREATE_CLASS_SUCCESS,
  CANCEL_EDITING_CLASS,
  SUBMIT_EDITED_CLASS,
  EDIT_CLASS_ERROR,
  EDIT_CLASS_SUCCESS,

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
  id_edited_class: '',
  editing: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CANCEL_EDITING_CLASS:
      return {
        ...state,
        username: '',
        password: '',
        description: '',
        editing: false,
        id_edited_class: '',
      };
    case UPDATE_CLASS_EDITOR_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case SUBMIT_EDITED_CLASS:
      return {
        ...state,
        loading: true,
        send: true,
        editing: false,
      };
    case EDIT_CLASS_SUCCESS || EDIT_CLASS_ERROR:
      return {
        ...state,
        username: '',
        password: '',
        description: '',
        loading: false,
        send: false,
        id_edited_class: '',
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
        id_edited_class: action.payload,
        editing: !state.editing,
      };
    default:
      return state;
  }
};

export const getItemById = (state, id) => {
  console.log(state.classes.classes);
  console.log(typeof id);
  console.log(id);
  const classEdited = state.classes.classes.find((elem) => elem.class_id === id);

  return classEdited;
};

