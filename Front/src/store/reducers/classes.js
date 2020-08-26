import { DELETE_CLASS, DELETE_CLASS_ERROR, DELETE_CLASS_SUCCESS, GET_CLASSES_ADMIN_PANEL } from '../action/AdminClass';


const initialState = {

  loading: false,
  classes: [],
  classe_id: '',
  error: '',

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CLASSES_ADMIN_PANEL:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CLASS:
      return {
        ...state,
        loading: true,
        classe_id: action.payload,
      };
    case DELETE_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: [...action.payload],
        classe_id: '',
        error: '',
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
