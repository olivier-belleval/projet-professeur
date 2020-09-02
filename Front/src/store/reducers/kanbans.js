import { slugifyTitle } from '../../utils';
import {
  GET_KANBANS,
  GET_KANBANS_ERROR,
  GET_KANBANS_SUCCESS,
  GET_KANBAN,
  GET_KANBAN_ERROR,
  GET_KANBAN_SUCCESS,
  GET_KANBAN_DETAIL,
  GET_KANBAN_DETAIL_SUCCESS,
  GET_LIST_ID,
} from '../action/data-actions';

import { DELETE_KANBAN, DELETE_KANBAN_ERROR, DELETE_KANBAN_SUCCESS } from '../action/AdminKanban';

import {
  TOGGLE_MODAL_CARD,
  TOGGLE_MODAL_LIST,
  CHANGE_FIELD_CARD,
  CREATE_CARD_ERROR,
  CREATE_CARD_SUCCESS,
  CREATE_CARD_SUBMIT,
  HANDLE_EDIT_MODE,
  DELETE_CARD,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_ERROR,
  CREATE_LIST_ERROR,
  CREATE_LIST_SUCCESS,
  CREATE_LIST_SUBMIT,
  DELETE_LIST,
  DELETE_LIST_ERROR,
  DELETE_LIST_SUCCESS,
} from '../action/create-actions';

export const initialState = {
  loading: false,
  error: '',
  list: [],
  kanban_id: '',
  kanban_detail: [],
  modalOpen: false,
  listModalOpen: false,
  newCardOrder: '',
  newCardContent: '',
  list_id: '',
  editMode: false,
  datas: false,
  card_id: '',
  newListOrder: '',
  newListTitle: '',
  newCardColor: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MODAL_CARD:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        list_id: action.payload,
      };
    case TOGGLE_MODAL_LIST:
      return {
        ...state,
        listModalOpen: !state.listModalOpen,
      };
    case HANDLE_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode,
      };
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
        newCardOrder: '',
        newCardContent: '',
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
    case GET_KANBAN:
      return {
        ...state,
        loading: false,
        datas: false,
        kanban_id: action.payload,
      };
    case GET_KANBAN_DETAIL:
      return {
        ...state,
        loading: true,
        datas: false,
      };
    case GET_KANBAN_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        kanban_detail: [...action.payload],
        datas: true,
      };
    case GET_KANBAN_SUCCESS:
      return {
        ...state,
        loading: false,
        kanban_detail: [...action.payload],
      };
    case GET_KANBAN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        kanban_detail: [],
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
        kanban_id: '',
        error: '',
        list: [],
      };
    case DELETE_KANBAN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        kanban_id: '',
        list: [],
      };
    case DELETE_CARD:
      return {
        ...state,
        card_id: action.payload,
        loading: true,
      };
    case DELETE_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        card_id: '',
      };
    case GET_LIST_ID:
      return {
        ...state,
        list_id: action.payload,
      };
    case CREATE_LIST_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        newListOrder: '',
        newListTitle: '',
        listModalOpen: !state.listModalOpen,
      };
    case CREATE_LIST_ERROR:
      return {
        ...state,
        loading: false,
        newListOrder: '',
        newListTitle: '',
        listModalOpen: !state.listModalOpen,
      };
    case DELETE_LIST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list_id: '',
      };
    case DELETE_LIST_ERROR:
      return {
        ...state,
        loading: false,
        list_id: '',
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
