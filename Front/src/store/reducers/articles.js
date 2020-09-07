import {
  GET_ARTICLES_ERROR,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES,
} from '../action/data-actions';

import {
  DELETE_ARTICLE,
  DELETE_ARTICLE_ERROR,
  DELETE_ARTICLE_SUCCESS,
  GET_ARTICLES_ADMIN_PANEL,
} from '../action/AdminArticle';

import {
  LOGOUT_SUCCESS,
} from '../action/user';

import { slugifyTitle } from '../../utils';

export const initialState = {
  loading: false,
  error: '',
  list: [],
  article_id: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        ...state,
        list: [],
      };
    case GET_ARTICLES:
      return {
        ...state,
        list: [],
        loading: true,
      };
    case GET_ARTICLES_ADMIN_PANEL:
      return {
        ...state,
        list: [],
        loading: true,
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...action.payload],
        error: '',
      };
    case GET_ARTICLES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        list: [],
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        loading: true,
        article_id: action.payload,
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [],
        article_id: '',
        error: '',
      };
    case DELETE_ARTICLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        article_id: '',
        list: [],
      };
    default:
      return state;
  }
};

export const getArticleBySlug = (state, slug) => {
  const article = state.articles.list.find((post) => {
    const slugTitle = slugifyTitle(post.article_title);
    const slugToFind = slugifyTitle(slug);
    return slugTitle === slugToFind;
  });

  return article;
};
