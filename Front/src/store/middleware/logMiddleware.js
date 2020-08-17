import axios from "axios";
import { LOGIN_SUBMIT, loginSubmitSuccess, loginSubmitError } from "../action";

const logMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case LOGIN_SUBMIT:
      const user = {
        username: store.getState().username,
        password: store.getState().password
      }
      axios({
        method: "post",
        url: "http://localhost:3001/login",
        data: user,
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(loginSubmitSuccess(res.data));
        })
        .catch((err) => {
          store.dispatch(
            loginSubmitError("Mot de passe incorrect");
          );
        });
        
    default:
      return;
  }
};

export default logMiddleware;
