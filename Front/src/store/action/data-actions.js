export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';

export const GET_KANBANS = 'GET_KANBANS';
export const GET_KANBANS_ERROR = 'GET_KANBANS_ERROR';
export const GET_KANBANS_SUCCESS = 'GET_KANBANS_SUCCESS';

export const getArticles = () => ({
  type: GET_ARTICLES,
});

export const getArticlesError = (payload) => ({
  type: GET_ARTICLES_ERROR,
  payload,
});

export const getArticlesSuccess = (payload) =>({
  type: GET_ARTICLES_SUCCESS,
  payload,
});

export const getKanbans = () => ({
  type: GET_KANBANS,
});

export const getKanbansError = (payload) => ({
  type: GET_KANBANS_ERROR,
  payload,
});

export const getKanbansSuccess = (payload) =>({
  type: GET_KANBANS_SUCCESS,
  payload,
});
