export const UPDATE_EDITOR_STATE = 'UPDATE_EDITOR_STATE';
export const CREATE_ARTICLE_SUMIT = 'CREATE_ARTICLE_SUMIT';
export const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_ERROR = 'CREATE_ARTICLE_ERROR';
export const CANCEL_EDITING_ARTICLE = 'CANCEL_EDITING_ARTICLE';
export const SUBMIT_EDITED_ARTICLE = 'SUBMIT_EDITED_ARTICLE';
export const EDIT_ARTICLE_ERROR = 'EDIT_ARTICLE_ERROR';
export const EDIT_ARTICLE_SUCCESS = 'EDIT_ARTICLE_SUCCESS';

export const updateEditorState = (payload) => ({
  type: UPDATE_EDITOR_STATE,
  payload,
});

export const createArticleSubmit = () =>({
  type: CREATE_ARTICLE_SUMIT,
});

export const createArticleError = (payload) =>({
  type: CREATE_ARTICLE_ERROR,
  payload,
});

export const createArticleSuccess = (payload) =>({
  type: CREATE_ARTICLE_SUCCESS,
  payload,
});

export const cancelEditingArticle = () => ({
  type: CANCEL_EDITING_ARTICLE,
});

export const editArticleSuccess = (payload) => ({
  type: EDIT_ARTICLE_SUCCESS,
  payload,
});

export const editArticleError = (payload) => ({
  type: EDIT_ARTICLE_ERROR,
  payload,
});

export const submitEditedArticle = () => ({
  type: SUBMIT_EDITED_ARTICLE,
});

