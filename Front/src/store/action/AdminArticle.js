export const MODIFY_ARTICLE = 'MODIFY_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_ERROR = 'DELETE_ARTICLE_ERROR';
export const JOIN_CLASS = 'JOIN_CLASS';
export const GET_ARTICLES_ADMIN_PANEL = 'GET_ARTICLES_ADMIN_PANEL';
export const EDIT_ARTICLE = 'EDIT_ARTICLE';

export const modifyArticle = () => ({
  type: MODIFY_ARTICLE,
});

export const deleteArticle = (payload) => ({
  type: DELETE_ARTICLE,
  payload,
});

export const deleteArticleSuccess = () => ({
  type: DELETE_ARTICLE_SUCCESS,
});

export const deleteArticleError = (payload) => ({
  type: DELETE_ARTICLE_ERROR,
  payload,
});

export const joinClass = () => ({
  type: JOIN_CLASS,
});

export const getArticlesAdminPanel = () => ({
  type: GET_ARTICLES_ADMIN_PANEL,
});

export const editArticle = (payload) => ({
  type: EDIT_ARTICLE,
  payload,
});
