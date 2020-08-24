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
          console.log('mes data : ', res.data.result);
          store.dispatch(getArticlesSuccess(res.data.result));
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
          console.log(res.data.result);
          store.dispatch(getKanbansSuccess(res.data.result));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getKanbansError('Impossible de récupérer les kanbans...'));
        });
      break;
    case GET_KANBAN:
      const kanban_id = store.getState().kanbans.kanban_id
      axios({
        method: 'get',
        url: `${local}api/kanban/${kanban_id}`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getKanbanSuccess(res.data.allKanban));
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
