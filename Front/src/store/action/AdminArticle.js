export const CHANGE_FIELD_ADMIN = 'CHANGE_FIELD_ADMIN';
export const SUBMIT_ASSOCIATION_ARTICLE = 'SUBMIT_ASSOCIATION_ARTICLE';
export const ASSOCIATION_ARTICLE_SUCCESS = 'ASSOCIATION_ARTICLE_SUCCESS';
export const ASSOCIATION_ARTICLE_ERROR = 'ASSOCIATION_ARTICLE_ERROR';

export const MODIFY_ARTICLE = 'MODIFY_ARTICLE';

export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_ERROR = 'DELETE_ARTICLE_ERROR';
export const JOIN_CLASS = 'JOIN_CLASS';
export const GET_ARTICLES_ADMIN_PANEL = 'GET_ARTICLES_ADMIN_PANEL';
export const EDIT_ARTICLE = 'EDIT_ARTICLE';
export const TOGGLE_ADD_CLASS_MODAL = 'TOGGLE_ADD_CLASS_MODAL';

export const REMOVE_CLASS_FROM_ARTICLE = 'REMOVE_CLASS_FROM_ARTICLE';
export const REMOVE_CLASS_SUCCESS_FROM_ARTICLE = 'REMOVE_CLASS_SUCCESS_FROM_ARTICLE';
export const REMOVE_CLASS_ERROR_FROM_ARTICLE = 'REMOVE_CLASS_ERROR_FROM_ARTICLE';
export const REMOVED_CLASS_FROM_ARTICLE = 'REMOVED_CLASS_FROM_ARTICLE';

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

export const toggleAddClassModal = (payload) => ({
  type: TOGGLE_ADD_CLASS_MODAL,
  payload,
});

export const changeField = (payload) =>({
  type: CHANGE_FIELD_ADMIN,
  payload,
});

export const submitAssociationArticle = () => ({
  type: SUBMIT_ASSOCIATION_ARTICLE,
});

export const associationArticleSuccess = (payload) => ({
  type: ASSOCIATION_ARTICLE_SUCCESS,
  payload,
});

export const associationArticleError = (payload) => ({
  type: ASSOCIATION_ARTICLE_ERROR,
  payload,
});

export const removeClassFromArticle = (payload) => ({
  type: REMOVE_CLASS_FROM_ARTICLE,
  payload,
});

export const removeClassSuccessFromArticle = () => ({
  type: REMOVE_CLASS_SUCCESS_FROM_ARTICLE,
});

export const removeClassErrorFromArticle = (payload) => ({
  type: REMOVE_CLASS_ERROR_FROM_ARTICLE,
  payload,
});

export const removedClassFromArticle = (payload) => ({
  type: REMOVED_CLASS_FROM_ARTICLE,
  payload,
});
