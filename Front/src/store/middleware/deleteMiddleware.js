import axios from 'axios';
import { toast } from 'react-toastify';

import {
  getArticlesSuccess,
  getArticlesError,
  getKanbansSuccess,
  getKanbansError,
  getKanbanError,
  getKanbanDetailSuccess,
} from '../action/data-actions';

import {
  deleteCardSuccess,
  deleteCardError,
  DELETE_CARD,
  DELETE_LIST,
  deleteListSuccess,
  deleteListError,
} from '../action/create-actions';

import {
  getClassesError,
  getClassesSuccess,
} from '../action/user';

import {
  DELETE_ARTICLE,
  deleteArticleError,
  deleteArticleSuccess,
  REMOVE_CLASS_FROM_ARTICLE,
} from '../action/AdminArticle';

import {
  DELETE_KANBAN,
  deleteKanbanError,
  deleteKanbanSuccess,
  REMOVE_CLASS,
  removeClassSuccess,
  removeClassError,
} from '../action/AdminKanban';

import {
  DELETE_CLASS,
  deleteClassError,
  deleteClassSuccess,
} from '../action/AdminClass';

const deleteMiddleware = (store) => (next) => (action) => {
  const utils = {
    local: 'http://localhost:3000/',
    distant: 'http://51.254.203.220/:3000/',
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
    case DELETE_ARTICLE:

      utils.articleId = store.getState().articles.article_id;

      axios({

        method: 'delete',
        url: `${utils.distant}api/article/${utils.articleId}/delete`,
        withCredentials: true,

      }).then((res) => {
        store.dispatch(deleteArticleSuccess());
        toast.dark("L'article a bien été supprimé.");
        axios({

          method: 'get',
          url: `${utils.distant}api/admin/article/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getArticlesSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getArticlesError());
        });
      }).catch((err) => {
        store.dispatch(deleteArticleError());
      });

      break;

    case DELETE_CLASS:

      utils.ClassId = store.getState().classes.class_id;

      axios({

        method: 'delete',
        url: `${utils.distant}api/admin/class/${utils.ClassId}/delete`,
        withCredentials: true,

      }).then((res) => {
        store.dispatch(deleteClassSuccess());
        toast.dark('La classe a bien été supprimé.');
        axios({

          method: 'get',
          url: `${utils.distant}api/admin/class/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getClassesSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getClassesError());
        });
      }).catch((err) => {
        store.dispatch(deleteClassError());
      });

      break;

    case DELETE_KANBAN:

      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({
        method: 'delete',
        url: `${utils.distant}api/kanban/${utils.kanbanId}/delete`,
        withCredentials: true,
      }).then((res) => {
        store.dispatch(deleteKanbanSuccess());
        toast.dark('Le kanban a bien été supprimé.');
        axios({

          method: 'get',
          url: `${utils.distant}api/kanban/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbansSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbansError());
        });
      }).catch((err) => {
        store.dispatch(deleteKanbanError());
      });

      break;

    case DELETE_CARD:
      utils.cardId = store.getState().kanbans.card_id;
      utils.list = store.getState().kanbans.list_id;
      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({

        method: 'delete',
        url: `${utils.distant}api/kanban/list/${utils.list}/card/${utils.cardId}/delete`,
        withCredentials: true,
      }).then((res) => {
        toast.dark('Oust la carte.');
        store.dispatch(deleteCardSuccess());

        axios({
          method: 'get',
          url: `${utils.distant}api/kanban/${utils.kanbanId}`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbanDetailSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbanError());
        });
      }).catch((err) => {
        store.dispatch(deleteCardError());
      });

      break;

    case DELETE_LIST:
      utils.listId = store.getState().kanbans.list_id;
      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({

        method: 'delete',
        url: `${utils.distant}api/kanban/${utils.kanbanId}/list/${utils.listId}/delete`,
        withCredentials: true,
      }).then((res) => {
        store.dispatch(deleteListSuccess());
        toast.dark('Oust la liste !');
        axios({
          method: 'get',
          url: `${utils.distant}api/kanban/${utils.kanbanId}`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbanDetailSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbanError());
        });
      }).catch((err) => {
        store.dispatch(deleteListError());
      });

      break;

    case REMOVE_CLASS:

      utils.kanbanId = store.getState().admin.item_id;
      utils.classUsername = store.getState().admin.removedClass;

      axios({
        method: 'post',
        url: `${utils.distant}api/kanban/${utils.kanbanId}/associate/remove`,
        withCredentials: true,
        data: {
          className: utils.classUsername,
        },
      }).then((res) => {
        store.dispatch(removeClassSuccess());
        toast.dark('La classe est désassociéée.');
        axios({

          method: 'get',
          url: `${utils.distant}api/kanban/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbansSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbansError());
        });
      }).catch((err) => {
        store.dispatch(removeClassError());
      });

      break;

    case REMOVE_CLASS_FROM_ARTICLE:

      utils.articleId = store.getState().admin.item_id;
      utils.classUsername = store.getState().admin.removedClass;

      axios({
        method: 'delete',
        url: `${utils.distant}api/article/${utils.articleId}/associate/remove`,
        withCredentials: true,
        data: {
          className: utils.classUsername,
        },
      }).then((res) => {
        store.dispatch(removeClassSuccess());
        toast.dark('La classe a bien été désassociéé.');
        axios({

          method: 'get',
          url: `${utils.distant}api/admin/article/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getArticlesSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getArticlesError());
        });
      }).catch((err) => {
        console.log('erreur :', err);
        store.dispatch(removeClassError());
      });

      break;
    default:
  }
};

export default deleteMiddleware;
