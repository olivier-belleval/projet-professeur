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
} from '../action/data-actions';

import {
  CREATE_ARTICLE_SUMIT,
  createArticleSuccess,
  createArticleError,
} from '../action/editor-actions';

import {
  GET_ARTICLES_ADMIN_PANEL, DELETE_ARTICLE, deleteArticleError, deleteArticleSuccess,
} from '../action/AdminArticle';

import { DELETE_KANBAN, deleteKanbanError, deleteKanbanSuccess } from '../action/AdminKanban';

const ajaxMiddleware = (store) => (next) => (action) => {
  const local = 'http://localhost:3000/';
  const server = 'http://54.90.32.97:3000/';

  next(action);

  switch (action.type) {
    case GET_ARTICLES:
      axios({
        method: 'get',
        url: `${local}api/articles`,
        withCredentials: true,
      })
        .then((res) => {
          console.log('mes data : ', res.data);
          store.dispatch(getArticlesSuccess(res.data.data));
        })
        .catch((err) => {
          console.log('mes erreurs de chargement : ', err);
          store.dispatch(getArticlesError('Impossible de récupérer les articles...'));
        });

      break;
    case GET_ARTICLES_ADMIN_PANEL:
      axios({
        method: 'get',
        url: `${local}api/admin/articles`,
        withCredentials: true,
      })
        .then((res) => {
          console.log('mes data : ', res.data);
          store.dispatch(getArticlesSuccess(res.data.data));
        })
        .catch((err) => {
          console.log('mes erreurs de chargement : ', err);
          store.dispatch(getArticlesError('Impossible de récupérer les articles...'));
        });

      break;
    case GET_KANBANS:
      axios({
        method: 'get',
        url: `${local}api/kanbans`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data.formatedResult);
          store.dispatch(getKanbansSuccess(res.data.formatedResult));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getKanbansError('Impossible de récupérer les kanbans...'));
        });
      break;

      // case GET_KANBAN:
      //   const kanban_id = store.getState().kanbans.kanban_id
      //   axios({
      //     method: 'get',
      //     url: `${local}api/kanban/${kanban_id}`,
      //     withCredentials: true,
      //   })
      //     .then((res) => {
      //       console.log(res.data);
      //       store.dispatch(getKanbanSuccess(res.data.allKanban));
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       store.dispatch(getKanbanError('Impossible de récupérer le kanban...'));
      //     });
      //   break;

    case DELETE_ARTICLE:
      const articleId = store.getState().articles.article_id;

      axios({
        method: 'delete',
        url: `${local}api/article/${articleId}/delete`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(deleteArticleSuccess());
          axios({
            method: 'get',
            url: `${local}api/articles`,
            withCredentials: true,

          })
            .then((res) => {
              console.log('mes data : ', res.data);
              store.dispatch(getArticlesSuccess(res.data.data));
            })
            .catch((err) => {
              console.log('mes erreurs de chargement de ma deuxième requete : ', err);
              store.dispatch(getArticlesError('Impossible de récupérer les articles...'));
            });
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(deleteArticleError('Impossible de supprimer'));
        });

      break;

    case CREATE_ARTICLE_SUMIT:

      axios({
        method: 'post',
        url: `${local}api/article/write`,
        withCredentials: true,
        data: {
          title: store.getState().editor.title,
          content: store.getState().editor.content,
        },
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(createArticleSuccess());
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(createArticleError('Impossible de créer'));
        });
      axios({
        method: 'get',
        url: `${local}api/admin/articles`,
        withCredentials: true,
      })
        .then((res) => {
          console.log('mes data : ', res.data);
          store.dispatch(getArticlesSuccess(res.data.data));
        })
        .catch((err) => {
          console.log('mes erreurs de chargement : ', err);
          store.dispatch(getArticlesError('Impossible de récupérer les articles...'));
        });
      break;

    case DELETE_KANBAN:
      const kanbanId = store.getState().kanbans.kanban_id;
      axios({
        method: 'delete',
        url: `${local}api/kanban/${kanbanId}/delete`,
        withCredentials: true,
        crossorigin: true,

      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(deleteKanbanSuccess());
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(deleteKanbanError('Impossible de supprimer les kanbans'));
        });
      axios({
        method: 'get',
        url: `${local}api/kanbans`,
        withCredentials: true,
      })
        .then((res) => {
          console.log('mes data : ', res.data);
          store.dispatch(getKanbanSuccess(res.data.result));
        })
        .catch((err) => {
          console.log('mes erreurs de chargement : ', err);
          store.dispatch(getKanbanError('Impossible de récupérer les kanbans...'));
        });

      break;

    default:
  }
};

export default ajaxMiddleware;
