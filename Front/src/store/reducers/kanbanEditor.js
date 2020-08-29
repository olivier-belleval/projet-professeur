import {
  UPDATE_KANBAN_EDITOR_STATE,
  CREATE_KANBAN_SUBMIT,
  CREATE_KANBAN_ERROR,
  CREATE_KANBAN_SUCCESS,

} from '../action/kanban-editor-action';
import {
  EDIT_KANBAN,
} from '../action/AdminKanban';

const initialState = {
  title: '',
  background: '',
  description: '',
  loading: false,
  message: '',
  send: false,
  id: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_KANBAN_EDITOR_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case CREATE_KANBAN_SUBMIT:
      return {
        ...state,
        loading: true,
        message: '',
        send: true,
      };
    case CREATE_KANBAN_SUCCESS:
      return {
        ...state,
        loading: false,
        title: '',
        background: '',
        description: '',
        message: 'Le kanban a été ajouté !',
        send: false,
      };
    case CREATE_KANBAN_ERROR:
      return {
        ...state,
        loading: false,
        message: 'Il y a eu une erreur à l\'envoi de votre classe',
        send: false,
      };
    case EDIT_KANBAN:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};
