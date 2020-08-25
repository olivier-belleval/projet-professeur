export const UPDATE_EDITOR_STATE = 'UPDATE_EDITOR_STATE';
export const CREATE_ARTICLE_SUMIT = 'CREATE_ARTICLE_SUMIT';
export const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_ERROR = 'CREATE_ARTICLE_ERROR';

export const updateEditorState = (payload) => ({
  type: UPDATE_EDITOR_STATE,
  payload,
});

export const createArticleSubmit = () =>({
  type: CREATE_ARTICLE_SUMIT
});

export const createArticleError= (payload) =>({
  type: CREATE_ARTICLE_ERROR,
  payload,
});

export const createArticleSuccess = (payload) =>({
  type: CREATE_ARTICLE_SUCCESS,
  payload
});


