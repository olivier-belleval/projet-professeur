import axios from 'axios';
import { GET_ARTICLES, getArticlesSuccess, getArticlesError } from '../action/data-actions';
import { GET_KANBANS, getKanbansSuccess, getKanbansError }from '../action/data-actions';

const ajaxMiddleware = (store) => (next) => (action) => {
  const url = 'http://localhost:3000/';

  next(action);

  switch (action.type) {
    case GET_ARTICLES:
      console.log('CASE get articles');
      axios({
        method: 'get',
        url: `${url}api/articles`,
        withCredentials: true,
      })
        .then((res) => {
          console.log('mes data : ',res.data.result);
          store.dispatch(getArticlesSuccess(res.data.result));
          console.log('fin du then');
        })
        .catch((err) => {
          console.log('mes erreurs de chargement : ',err);
          store.dispatch(getArticlesError("Impossible de récupérer les articles..."))
        });
        
      break;
    case GET_KANBANS:
      axios({
        method: 'get',
        url: `${url}kabans`,
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        store.dispatch(getKanbansSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        store.dispatch(getKanbansError("Impossible de récupérer les kanbans..."))
      })
    break;
    case CLASSES:
      axios({
        method: 'get',
        url: `${url}api/classes`,
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        store.dispatch(getClassesSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        store.dispatch(getClassesError("Impossible de récupérer les classes..."))
      })
    break;
    default:
      return;
  }
}


export default ajaxMiddleware;
