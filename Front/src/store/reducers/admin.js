import {
  TOGGLE_ADD_CLASS_MODAL,
  CHANGE_FIELD_ADMIN,
  SUBMIT_ASSOCIATION_ARTICLE,
  ASSOCIATION_ARTICLE_SUCCESS,
  ASSOCIATION_ARTICLE_ERROR,
  REMOVE_CLASS_FROM_ARTICLE,
  REMOVE_CLASS_SUCCESS_FROM_ARTICLE,
  REMOVE_CLASS_ERROR_FROM_ARTICLE,
  REMOVED_CLASS_FROM_ARTICLE,
} from '../action/AdminArticle';

import {
  SUBMIT_ASSOCIATION_KANBAN,
  ASSOCIATION_KANBAN_SUCCESS,
  ASSOCIATION_KANBAN_ERROR,
  REMOVE_CLASS,
  REMOVE_CLASS_ERROR,
  REMOVE_CLASS_SUCCESS,
  REMOVED_CLASS,
} from '../action/AdminKanban';

export const initialState = {
  loading: false,
  error: '',
  item_id: '',
  classAdded: '',
  modalOpen: false,
  message: '',
  removedClass: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_ADD_CLASS_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        item_id: action.payload,
      };
    case CHANGE_FIELD_ADMIN:
      return {
        ...state,
        ...action.payload,
      };
    case SUBMIT_ASSOCIATION_ARTICLE || SUBMIT_ASSOCIATION_KANBAN:
      return {
        ...state,
        loading: true,
        message: '',
      };
    case ASSOCIATION_ARTICLE_ERROR || ASSOCIATION_KANBAN_ERROR:
      return {
        ...state,
        loadind: false,
        message: action.payload,
        classAdded: '',
      };
    case ASSOCIATION_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: '',
        modalOpen: false,
        classAdded: '',
        item_id: '',
      };
    case ASSOCIATION_KANBAN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: '',
        modalOpen: false,
        classAdded: '',
        item_id: '',
      };

    case REMOVE_CLASS:
      return {
        ...state,
        loadind: true,
        item_id: action.payload,
      };
    case REMOVE_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        item_id: '',
      };
    case REMOVE_CLASS_ERROR:
      return {
        ...state,
        loadind: false,
        message: action.payload,
        item_id: '',
      };
    case REMOVED_CLASS:
      return {
        ...state,
        loadind: false,
        removedClass: action.payload,
      };

    case REMOVE_CLASS_FROM_ARTICLE:
      return {
        ...state,
        loadind: true,
        item_id: action.payload,
      };
    case REMOVE_CLASS_SUCCESS_FROM_ARTICLE:
      return {
        ...state,
        loading: false,
        item_id: '',
      };
    case REMOVE_CLASS_ERROR_FROM_ARTICLE:
      return {
        ...state,
        loadind: false,
        message: action.payload,
        item_id: '',
      };
    case REMOVED_CLASS_FROM_ARTICLE:
      return {
        ...state,
        loadind: false,
        removedClass: action.payload,
      };

    default:
      return state;
  }
};
