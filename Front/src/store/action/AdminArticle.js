export const MODIFY_ARTICLE = 'MODIFY_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const JOIN_CLASS = 'JOIN_CLASS';

export const modifyArticle = () => ({
  type: MODIFY_ARTICLE,
});

export const deleteArticle = () => ({
  type: DELETE_ARTICLE,
});

export const joinClass = () => ({
  type: JOIN_CLASS,
});
