// For all articles

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';

// For ONE article
export const GET_ARTICLE = 'GET_ARTICLE';

// For all kanbans
export const GET_KANBANS = 'GET_KANBANS';
export const GET_KANBANS_ERROR = 'GET_KANBANS_ERROR';
export const GET_KANBANS_SUCCESS = 'GET_KANBANS_SUCCESS';

// For ONE kanban
export const GET_KANBAN_ID = 'GET_KANBAN_ID';
export const GET_KANBAN = 'GET_KANBAN';
export const GET_KANBAN_ERROR = 'GET_KANBAN_ERROR';
export const GET_KANBAN_SUCCESS = 'GET_KANBAN_SUCCESS';

// For all articles
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

// For all kanbans
export const getKanbans = () => ({
  type: GET_KANBANS,
});
export const getKanbansError = (payload) => ({
  type: GET_KANBANS_ERROR,
  payload,
});
export const getKanbansSuccess = (payload) => ({
  type: GET_KANBANS_SUCCESS,
  payload,
});

// For ONE kanban
export const getKanbanId = (payload) =>({
  type: GET_KANBAN_ID,
  payload,
})

export const getKanbanError = (payload) => ({
  type: GET_KANBAN_ERROR,
  payload,
});
export const getKanban = (payload) => ({
  type: GET_KANBAN,
  payload,
});
export const getKanbanSuccess = (payload) =>({
  type: GET_KANBAN_SUCCESS,
  payload,
});

// For ONE article
export const getArticle = (payload) => ({
  type: GET_ARTICLE,
  payload,
});
