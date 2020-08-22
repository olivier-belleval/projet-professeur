import axios from 'axios';
import {
  LOGIN_SUBMIT, loginSubmitSuccess, loginSubmitError,
} from '../action/index';
import { LOGOUT, logoutSuccess } from '../action/user';

const logMiddleware = (store) => (next) => (action) => {
  console.log('middleware');
  next(action);

  switch (action.type) {
    case LOGIN_SUBMIT:
      console.log('case login submit');
      const user = {
        username: store.getState().username,
        password: store.getState().password,
      };

      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
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
        method: 'post',
        url: 'http://localhost:3000/logout',
        withCredentials: true,
      })
        .then((res) => {
          console.log('logout request');
          store.dispatch(logoutSuccess());
        })
        .catch((err) => {
          store.dispatch(
            console.error(err),
          );
        });
      break;

    default:
  }
};

export default logMiddleware;
