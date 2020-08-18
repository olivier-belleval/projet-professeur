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
    // case INPUT_MESSAGE_CHANGE
    // Renvoyer le state tel qu'il était
    // MAIS en changeant la propriété
    // messageInput, et lui donner en valeur
    // ce qui a été tapé par l'user
    // (action.value par exemple)
    default:
      return state;
  }
};