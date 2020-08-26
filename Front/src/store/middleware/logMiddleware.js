import axios from 'axios';
import {
  LOGIN_SUBMIT, loginSubmitSuccess, loginSubmitError,
} from '../action/index';
import { LOGOUT, GET_CLASSES, getClassesSuccess, getClassesError, logoutSuccess, LOGIN_CLASSES_SUBMIT } from '../action/user';

const logMiddleware = (store) => (next) => (action) => {
  const local = 'http://localhost:3000/';
  const server = 'http://54.90.32.97:3000/';
  
  const user = {
        username: store.getState().user.username,
        password: store.getState().user.password,
      };

  next(action);

  switch (action.type) {
    case LOGIN_SUBMIT:
      console.log('case login submit');
      
      console.log('middleware request axios', user);
      axios({
        method: 'post',
        url: `${local}login/admin`,
        data: user,
        withCredentials: true,
      })
        .then((res) => {
          console.log('login request');
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
        url: `${local}login/`,
        data: user,
        withCredentials: true,
      })
        .then((res) => {
          console.log('login request');
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
      console.log('case logout');
      axios({
        method: 'get',
        url: `${local}login/logout`,
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
        url: `${local}login`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data.data);
          store.dispatch(getClassesSuccess(res.data.data[0].class_usernames));
          console.log('je vais au bout de ma requête');
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
