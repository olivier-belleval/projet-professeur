import axios from 'axios';
import { GET_ARTICLES } from '../action/data-actions';



const ajaxMiddleware = (store) => (next) => (action) => {
  console.log('middleware ajax');
  next(action);

  switch (action.type) {
    case GET_ARTICLES:
      axios({
        method: 'get',
        url: 'http://localhost:3000/api/articles',
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getArticles(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getArticlesError("Impossible de récupérer les articles..."))
        })
      break;
    default:
      return;
  }
}


export default ajaxMiddleware;
