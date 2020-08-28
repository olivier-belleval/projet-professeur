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
        classes: [...action.payload],
        class_id: '',
        error: '',
      };
    case DELETE_CLASS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        class_id: '',
      };
    default:
      return state;
  }
};
