export const MODIFY_ARTICLE = 'MODIFY_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_ERROR = 'DELETE_ARTICLE_ERROR';
export const JOIN_CLASS = 'JOIN_CLASS';

export const modifyArticle = () => ({
  type: MODIFY_ARTICLE,
});

export const deleteArticle = (payload) => ({
  type: DELETE_ARTICLE,
  payload,
});

export const deleteArticleSuccess = (payload) => ({
  type: DELETE_ARTICLE_SUCCESS,
  payload,
});

export const deleteArticleError = (payload) => ({
  type: DELETE_ARTICLE_ERROR,
  payload,
});

export const joinClass = () => ({
  type: JOIN_CLASS,
});
