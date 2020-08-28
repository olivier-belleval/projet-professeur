import { slugifyTitle } from '../../utils';
import {
  GET_KANBANS,
  GET_KANBANS_ERROR,
  GET_KANBANS_SUCCESS,
  GET_KANBAN,
  GET_KANBAN_ID,
  GET_KANBAN_ERROR,
  GET_KANBAN_SUCCESS,
} from '../action/data-actions';

import { DELETE_KANBAN, DELETE_KANBAN_ERROR, DELETE_KANBAN_SUCCESS } from '../action/AdminKanban';

import {
  TOGGLE_MODAL_CARD,
  CHANGE_FIELD_CARD,
  CREATE_CARD_ERROR,
  CREATE_CARD_SUCCESS,
  CREATE_CARD_SUBMIT,
  HANDLE_EDIT_MODE,
} from '../action/create-actions';

export const initialState = {
  loading: false,
  error: '',
  list: [],
  kanban_id: '',
  kanban: [],
  modalOpen: false,
  newCardOrder: '',
  newCardContent: '',
  list_id: '',
  editMode: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MODAL_CARD:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        list_id: action.payload,
      };
    case HANDLE_EDIT_MODE:
      return {
        ...state,
        editMode : !state.editMode,
      }
    case CREATE_CARD_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        list_id: '',
        modalOpen: !state.modalOpen,
      };
    case CHANGE_FIELD_CARD:
      return {
        ...state,
        ...action.payload,
      };
    case GET_KANBANS:
      return {
        ...state,
        loading: true,
      };
    case GET_KANBANS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...action.payload],
        error: '',
      };
    case GET_KANBANS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        list: [],
      };
    case GET_KANBAN_ID:
      return{
        ...state,
        kanban_id: action.payload,
      }
    case GET_KANBAN:
      return {
        ...state,
        loading: true,
        kanban: [],
      };
    case GET_KANBAN_SUCCESS:
      return {
        ...state,
        loading: false,
        kanban: [...action.payload],
      };
    case GET_KANBAN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        kanban: [],
      };
    case DELETE_KANBAN:
      return {
        ...state,
        loading: true,
        kanban_id: action.payload,
      };
    case DELETE_KANBAN_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...action.payload],
        kanban_id: '',
        error: '',
      };
    case DELETE_KANBAN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        kanban_id: '',
        list: [],
      };
    default:
      return state;
  }
};

export const getKanbanBySlug = (state, slug) => {
  const kanban = state.kanbans.list.find((item) => {
    const slugTitle = slugifyTitle(item.title);
    const slugToFind = slugifyTitle(slug);
    return slugTitle === slugToFind;
  });

  return kanban;
};
