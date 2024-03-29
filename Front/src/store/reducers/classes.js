import {
  DELETE_CLASS,
  DELETE_CLASS_ERROR,
  DELETE_CLASS_SUCCESS,
  GET_CLASSES_ADMIN_PANEL,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_ERROR,
} from '../action/AdminClass';

const initialState = {

  loading: false,
  classes: [],
  class_id: '',
  error: '',
  message: '',

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CLASSES_ADMIN_PANEL:
      return {
        ...state,
        classes: [],
        loading: true,
      };
    case GET_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: [...action.payload],
        error: '',
      };
    case GET_CLASSES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        classes: [],
      };
    case DELETE_CLASS:
      return {
        ...state,
        loading: true,
        class_id: action.payload,
      };
    case DELETE_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        classe_id: '',
        error: '',
        message: 'La classe a bien été supprimé',
      };
    case DELETE_CLASS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        classe_id: '',
        classes: [],
      };
    default:
      return state;
  }
};
