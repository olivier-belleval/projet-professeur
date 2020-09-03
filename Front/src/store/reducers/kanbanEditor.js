import {
  UPDATE_KANBAN_EDITOR_STATE,
  CREATE_KANBAN_SUBMIT,
  CREATE_KANBAN_ERROR,
  CREATE_KANBAN_SUCCESS,
  CANCEL_EDITING_KANBAN,
  SUBMIT_EDITED_KANBAN,
  EDIT_KANBAN_ERROR,
  EDIT_KANBAN_SUCCESS,
  TOGGLE_MODAL_LIST_EDITION,
  GET_CARD_DETAILS,
  GET_LIST_DETAILS,
  SUBMIT_LIST_EDITION,
  LIST_EDITION_ERROR,
  LIST_EDITION_SUCCESS,
  SUBMIT_CARD_EDITION,
  CARD_EDITION_ERROR,
  CARD_EDITION_SUCCESS,
  TOGGLE_MODAL_CARD_EDITION,

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
  id_edited_kanban: '',
  editing: false,
  editionModalList: false,
  editionModalCard: false,
  listDetails: {
    title: '',
    order: '',
  },
  cardDetails: {
    description: '',
    order: '',
    color: '',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CANCEL_EDITING_KANBAN:
      return {
        ...state,
        title: '',
        background: '',
        description: '',
        editing: false,
        id_edited_kanban: '',
      };
    case UPDATE_KANBAN_EDITOR_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case SUBMIT_EDITED_KANBAN:
      return {
        ...state,
        loading: true,
        send: true,
        editing: false,
      };
    case EDIT_KANBAN_SUCCESS || EDIT_KANBAN_ERROR:
      return {
        ...state,
        title: '',
        background: '',
        description: '',
        loading: false,
        send: false,
        id_edited_kanban: '',
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
        message: 'Il y a eu une erreur à l\'envoi de votre tableau',
        send: false,
      };
    case EDIT_KANBAN:
      return {
        ...state,
        id_edited_kanban: action.payload,
        editing: !state.editing,
      };
    case TOGGLE_MODAL_LIST_EDITION:
      return {
        ...state,
        editionModalList: !state.editionModalList,
      };
    case TOGGLE_MODAL_CARD_EDITION:
      return {
        ...state,
        editionModalCard: !state.editionModalCard,
        card_id: action.payload,
      };
    case GET_LIST_DETAILS:
      return {
        ...state,
        listDetails: {
          ...action.payload,
        },
      };
    case GET_CARD_DETAILS:
      return {
        ...state,
        cardDetails: {
          ...action.payload,
        },
      };
    case SUBMIT_LIST_EDITION:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDITION_SUCCESS:
      return {
        ...state,
        loading: false,
        listDetails: '',
        editionModalList: false,
      };
    case LIST_EDITION_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case SUBMIT_CARD_EDITION:
      return {
        ...state,
        loading: true,
      };
    case CARD_EDITION_SUCCESS:
      return {
        ...state,
        loading: false,
        cardDetails: '',
        editionModalCard: false,
      };
    case CARD_EDITION_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export const getItemById = (state, id) => {
  const kanbanEdited = state.kanbans.list.find((elem) => elem.id === id);
  return kanbanEdited;
};
