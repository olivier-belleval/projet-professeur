import axios from 'axios';
import {
  LOGIN_SUBMIT, loginSubmitSuccess, loginSubmitError, loginSubmit,
} from '../action';

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
        url: 'http://localhost:3000/api/login',
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

    default:
  }
};

export default logMiddleware;
