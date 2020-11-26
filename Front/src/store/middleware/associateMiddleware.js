import axios from 'axios';
import { toast } from 'react-toastify';

import {
  getArticlesSuccess,
  getArticlesError,
  getKanbansSuccess,
  getKanbansError,
} from '../action/data-actions';

import {
  SUBMIT_ASSOCIATION_ARTICLE,
  associationArticleError,
  associationArticleSuccess,
} from '../action/AdminArticle';

import {
  SUBMIT_ASSOCIATION_KANBAN,
  associationKanbanError,
  associationKanbanSuccess,
} from '../action/AdminKanban';


const associateMiddleware = (store) => (next) => (action) => {
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
    case SUBMIT_ASSOCIATION_ARTICLE:
      utils.articleId = store.getState().admin.item_id;
      utils.classUsername = store.getState().admin.classAdded;

      axios({

        method: 'post',
        url: `${utils.distant}api/article/${utils.articleId}/associate`,
        withCredentials: true,
        data: {
          className: utils.classUsername,
        },
      }).then((res) => {
        store.dispatch(associationArticleSuccess());
        toast.dark('Hop ! Classe associée.');
        axios({

          method: 'get',
          url: `${utils.distant}api/admin/article/all`,
          withCredentials: true,

        })
          .then((res) => {
            store.dispatch(getArticlesSuccess(res.data.data));
          })

          .catch((err) => {
            store.dispatch(getArticlesError());
          });
      }).catch((err) => {
        store.dispatch(associationArticleError());
      });

      break;

    case SUBMIT_ASSOCIATION_KANBAN:
      utils.kanbanId = store.getState().admin.item_id;
      utils.classUsername = store.getState().admin.classAdded;

      axios({

        method: 'post',
        url: `${utils.distant}api/kanban/${utils.kanbanId}/associate`,
        withCredentials: true,
        data: {
          className: utils.classUsername,
        },
      }).then((res) => {
        store.dispatch(associationKanbanSuccess());
        toast.dark('Hop ! Classe associée au kanban');
        axios({

          method: 'get',
          url: `${utils.distant}api/kanban/all`,
          withCredentials: true,

        }).then((res) => {
          console.log(res.data.data);
          store.dispatch(getKanbansSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbansError());
        });
      }).catch((err) => {   
        store.dispatch(associationKanbanError());
      });

      break;
    default:
  }
};

export default associateMiddleware;
