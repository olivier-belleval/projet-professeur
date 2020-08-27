import { slugifyTitle } from '../../utils';
import { GET_KANBANS, GET_KANBANS_ERROR, GET_KANBANS_SUCCESS, GET_KANBAN, GET_KANBAN_ERROR, GET_KANBAN_SUCCESS } from '../action/data-actions';

import { TOGGLE_MODAL_CARD, CHANGE_FIELD_CARD } from '../action/create-actions';

export const initialState = {
  loading: false,
  error: '',
  list: [],
  kanban_id: '',
  kanban_detail: [],
  modalOpen: false,
  newCardTitle: '',
  newCardContent: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MODAL_CARD:
      return {
        ...state,
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
        kanban_id: action.payload,
        kanban_detail:[],
      };
    case GET_KANBAN_SUCCESS:
      return {
        ...state,
        loading: false,
        kanban_detail: [...action.payload],
        kanban_id: '',
      };
    case GET_KANBAN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        kanban_detail: [],
        kanban_id: '',
      };
    default:
      return state;
  }
};

export const getKanbanBySlug = (state, slug) => {
  const kanban = state.kanbans.list.find((item) => {
    console.log(slug);
    console.log(item);
    const slugTitle = slugifyTitle(item.title);
    const slugToFind = slugifyTitle(slug);
    return slugTitle === slugToFind;
  });

  return kanban;
};
