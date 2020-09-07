import {
  UPDATE_EDITOR_STATE,
  CREATE_ARTICLE_SUMIT,
  CREATE_ARTICLE_ERROR,
  CREATE_ARTICLE_SUCCESS,
  CANCEL_EDITING_ARTICLE,
  SUBMIT_EDITED_ARTICLE,
  EDIT_ARTICLE_ERROR,
  EDIT_ARTICLE_SUCCESS,

} from '../action/editor-actions';

import {
  EDIT_ARTICLE,
  GET_ARTICLES_ADMIN_PANEL,
  DELETE_ARTICLE_SUCCESS,
} from '../action/AdminArticle';

const initialState = {
  title: '',
  content: '',
  loading: false,
  message: '',
  send: false,
  id_edited_article: '',
  editing: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        message: 'L\'article a bien été supprimé.',
      };
    case CANCEL_EDITING_ARTICLE:
      return {
        ...state,
        title: '',
        content: '',
        editing: false,
        id_edited_article: '',
        message: '',
      };
    case UPDATE_EDITOR_STATE:
      return {
        ...state,
        ...action.payload,
        message: '',
      };
    case SUBMIT_EDITED_ARTICLE:
      return {
        ...state,
        loading: true,
        editing: false,
      };
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        title: '',
        content: '',
        loading: false,
        send: true,
        id_edited_article: '',
        message: 'L\'article a bien été édité',
      };
    case EDIT_ARTICLE_ERROR:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case CREATE_ARTICLE_SUMIT:
      return {
        ...state,
        loading: true,
        message: '',
      };
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        title: '',
        content: '',
        message: 'L\'article a été ajouté !',
        send: true,
      };
    case CREATE_ARTICLE_ERROR:
      return {
        ...state,
        loading: false,
        message: `Tous les champs doivent être remplis.
        Le titre doit comporter 5 caractères minimum.`,
      };
    case EDIT_ARTICLE:
      return {
        ...state,
        id_edited_article: action.payload,
        editing: !state.editing,
        message: '',
      };
    case GET_ARTICLES_ADMIN_PANEL:
      return {
        ...state,
        send: false,
      };
    default:
      return state;
  }
};

export const getItemById = (state, id) => {
  const articleEdited = state.articles.list.find((elem) => elem.article_id === id);

  return articleEdited;
};
