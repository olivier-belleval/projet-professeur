import { GET_ARTICLES_ERROR, GET_ARTICLES_SUCCESS, GET_ARTICLES } from '../action/data-actions';
import { slugifyTitle } from '../../utils';

export const initialState = {
  loading: false,
  error: '',
  list: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
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
