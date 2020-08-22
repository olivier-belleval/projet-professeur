import axios from 'axios';
import { GET_ARTICLES, getArticlesSuccess, getArticlesError } from '../action/data-actions';
import { GET_KANBANS, getKanbansSuccess, getKanbansError }from '../action/data-actions';

const ajaxMiddleware = (store) => (next) => (action) => {
  const url = 'http://localhost:3000/';

  next(action);

  switch (action.type) {
    case GET_ARTICLES:
      axios({
        method: 'get',
        url: `${url}api/articles`,
        withCredentials: true,
      })
        .then((res) => {
          console.log('mes data : ',res.data.result);
          store.dispatch(getArticlesSuccess(res.data.result));
        })
        .catch((err) => {
          console.log('mes erreurs de chargement : ',err);
          store.dispatch(getArticlesError("Impossible de récupérer les articles..."))
        });
        
      break;
    case GET_KANBANS:
      axios({
        method: 'get',
        url: `${url}api/kanbans`,
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.result);
        store.dispatch(getKanbansSuccess(res.data.result));
      })
      .catch((err) => {
        console.log(err);
        store.dispatch(getKanbansError("Impossible de récupérer les kanbans..."))
      })
    break;
    default:
      return;
  }
}


export default ajaxMiddleware;
