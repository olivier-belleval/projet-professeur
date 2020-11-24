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
  EDIT_CLASS, GET_CLASSES_ADMIN_PANEL,
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
        send: false,
      };
    case SUBMIT_EDITED_CLASS:
      return {
        ...state,
        loading: true,
        editing: false,
      };
    case EDIT_CLASS_SUCCESS:
      return {
        ...state,
        username: '',
        password: '',
        description: '',
        loading: false,
        send: true,
        id_edited_class: '',
        message: '',
      };
    case EDIT_CLASS_ERROR:
      return {
        ...state,
        loading: false,
        message: ' Le mot passe doit faire minimum 5 caractères.',
      };
    case CREATE_CLASS_SUBMIT:
      return {
        ...state,
        loading: true,
        message: '',
      };
    case CREATE_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        username: '',
        password: '',
        description: '',
        message: 'La classe a été ajouté !',
        send: true,
      };
    case CREATE_CLASS_ERROR:
      return {
        ...state,
        loading: false,
        message: 'Le mot de passe doit faire minimum 5 caractères, sans espaces.',
        send: false,
      };
    case EDIT_CLASS:
      return {
        ...state,
        id_edited_class: action.payload,
        editing: !state.editing,
      };
    case GET_CLASSES_ADMIN_PANEL:
      return {
        ...state,
        send: false,
      };
    default:
      return state;
  }
};

export const getItemById = (state, id) => {
  const classEdited = state.classes.classes.find((elem) => elem.class_id === id);
  return classEdited;
};
