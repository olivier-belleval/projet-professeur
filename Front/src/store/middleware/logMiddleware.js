import axios from 'axios';
import {
  LOGIN_SUBMIT, loginSubmitSuccess, loginSubmitError,
} from '../action/index';
import { LOGOUT, GET_CLASSES, getClassesSuccess, getClassesError, logoutSuccess, LOGIN_CLASSES_SUBMIT } from '../action/user';

const logMiddleware = (store) => (next) => (action) => {
  
  const utils = {
    local: 'http://localhost:3000/',
    distant: 'http://54.90.32.97:3000/',
    user: {
      username: store.getState().user.username,
      password: store.getState().user.password,
    },
  };

  next(action);

  switch (action.type) {
    case LOGIN_SUBMIT:

      axios({
        method: 'post',
        url: `${utils.local}login/admin`,
        data: utils.user,
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(loginSubmitSuccess(res.data));
        })
        .catch((err) => {
          store.dispatch(
            console.error(err),
            loginSubmitError('Mot de passe incorrect'),
          );
        });
      break;
      
      case LOGIN_CLASSES_SUBMIT:
      axios({
        method: 'post',
        url: `${utils.local}login/`,
        data: utils.user,
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(loginSubmitSuccess(res.data));
        })
        .catch((err) => {
          store.dispatch(
            console.error(err),
            loginSubmitError('Mot de passe incorrect'),
          );
        });
      break;

    case LOGOUT:

      axios({
        method: 'get',
        url: `${utils.local}login/logout`,
        withCredentials: true,

      })
        .then((res) => {
          console.log('logout request', res);
          store.dispatch(logoutSuccess());
        })
        .catch((err) => {
          store.dispatch(
            console.error(err),
          );
        });
      break;
    case GET_CLASSES:
      axios({
        method: 'get',
        url: `${utils.local}login`,
        withCredentials: true,
      })
        .then((res) => {
          console.log('res.data GET_CLASSES dans logMiddleware : ', res.data);
          store.dispatch(getClassesSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getClassesError('Impossible de récupérer les classes...'));
        })

      break;

    default:
  }
};

export default logMiddleware;
