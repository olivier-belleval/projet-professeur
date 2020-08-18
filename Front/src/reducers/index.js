// Importer le type d'action auquel tu veux réagir
// import { INCREMENT } from '../action';

import { TOGGLE_LOGIN_FORM } from '../store/action';

const initialState = {
  loginOpened: false,
  path: [
    'articles',
    'kanban',
    'espace admin',
    'se déconnecter',
  ],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        loginOpened: !state.loginOpened,
      };
    default:
      return state;
  }
};
