import axios from 'axios';
import { GET_ARTICLES, getArticlesSuccess, getArticlesError } from '../action/data-actions';
import { GET_KANBANS, getKanbansSuccess, getKanbansError }from '../action/data-actions';



const ajaxMiddleware = (store) => (next) => (action) => {
  console.log('middleware ajax');
  const url = 'http://localhost:3000/'
  next(action);

  switch (action.type) {
    case GET_ARTICLES:
      axios({
        method: 'get',
        url: `${url}articles`,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getArticlesSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getArticlesError("Impossible de récupérer les articles..."))
        })
      break;
    case GET_KANBANS:
      axios({
        method: 'get',
        url: `${url}kabans`,
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
    default:
      return;
  }
}


export default ajaxMiddleware;
