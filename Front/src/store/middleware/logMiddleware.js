import axios from 'axios';
import {
  LOGIN_SUBMIT, loginSubmitSuccess, loginSubmitError,
} from '../action/index';
import { LOGOUT, GET_CLASSES, getClassesSuccess, getClassesError, logoutSuccess } from '../action/user';

const logMiddleware = (store) => (next) => (action) => {
  console.log('middleware');
  next(action);

  switch (action.type) {
    case LOGIN_SUBMIT:
      console.log('case login submit');
      const user = {
        username: store.getState().user.username,
        password: store.getState().user.password,
      };
      console.log('middleware request axios', user);
      axios({
        method: 'post',
        url: 'http://localhost:3000/login/admin',
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
    case GET_CLASSES:
      axios({
        method: 'get',
        url: 'http://localhost:3000/login',
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data.data);
          store.dispatch(getClassesSuccess(res.data.data.class_usernames)); 
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
