import axios from 'axios';

import {
  GET_ARTICLES,
  getArticlesSuccess,
  getArticlesError,
  GET_KANBANS,
  getKanbansSuccess,
  getKanbansError,
  GET_KANBAN,
  getKanbanSuccess,
  getKanbanError,
  getKanbanDetailSuccess,
  GET_KANBAN_DETAIL,
} from '../action/data-actions';


import {
  GET_CLASSES,
  getClassesError,
  getClassesSuccess,
} from '../action/user';

import {
  GET_ARTICLES_ADMIN_PANEL,

} from '../action/AdminArticle';

import {
  GET_CLASSES_ADMIN_PANEL,

} from '../action/AdminClass';

const ajaxMiddleware = (store) => (next) => (action) => {
  const utils = {
    local: 'http://localhost:3000/',
    distant: 'http://api.omyprof.belleval.com',
    kanbanId: '',
    listId: '',
    cardId: '',
    ClassId: '',
    list: '',
    articleId: '',
    editedArticleId: '',
    editedClassId: '',
    classUsername: '',
  };

  next(action);

  switch (action.type) {
    case GET_ARTICLES:
      axios({

        method: 'get',
        url: `${utils.distant}api/article/all`,
        withCredentials: true,

      })
        .then((res) => {
          store.dispatch(getArticlesSuccess(res.data.data));
        })

        .catch((err) => {
          store.dispatch(getArticlesError('Impossible de récupérer les articles...'));
        });

      break;

    case GET_ARTICLES_ADMIN_PANEL:
      axios({

        method: 'get',
        url: `${utils.distant}api/admin/article/all`,
        withCredentials: true,

      })
        .then((res) => {
          store.dispatch(getArticlesSuccess(res.data.data));
        })

        .catch((err) => {
          store.dispatch(getArticlesError('Impossible de récupérer les articles...'));
        });

      break;

    case GET_CLASSES_ADMIN_PANEL:

      axios({

        method: 'get',
        url: `${utils.distant}api/admin/class/all`,
        withCredentials: true,

      }).then((res) => {
        store.dispatch(getClassesSuccess(res.data.data));
      }).catch((err) => {
        store.dispatch(getClassesError('Impossible de récupérer les classes...'));
      });

      break;


    case GET_KANBANS:

      axios({

        method: 'get',
        url: `${utils.distant}api/kanban/all`,
        withCredentials: true,

      }).then((res) => {
        store.dispatch(getKanbansSuccess(res.data.data));
      }).catch((err) => {
        store.dispatch(getKanbansError('Impossible de récupérer les kanbans...'));
      });

      break;

    case GET_KANBAN_DETAIL:
      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({
        method: 'get',
        url: `${utils.distant}api/kanban/${utils.kanbanId}`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getKanbanDetailSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getKanbanError('Impossible de récupérer le kanban...'));
        });
      break;

    default:
  }
};

export default ajaxMiddleware;
