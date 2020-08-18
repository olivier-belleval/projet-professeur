// Importer le type d'action auquel tu veux réagir
// import { INCREMENT } from '../action';

const initialState = {
  loginOpened: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case INCREMENT:
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };
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
