export const TOGGLE_MODAL_CARD = 'TOGGLE_MODAL_CARD';
export const TOGGLE_MODAL_LIST = 'TOGGLE_MODAL_LIST';


export const CHANGE_FIELD_CARD = 'CHANGE_FIELD_CARD';
export const CREATE_CARD_SUBMIT = 'HANDLE_CARD_SUBMIT';
export const CREATE_CARD_SUCCESS = 'CREATE_CARD_SUCCESS';
export const CREATE_CARD_ERROR = 'CREATE_CARD_ERROR';
export const HANDLE_EDIT_MODE = 'HANDLE_EDIT_MODE';


export const DELETE_CARD = 'DELETE_CARD';
export const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
export const DELETE_CARD_ERROR = 'DELETE_CARD_ERROR';


export const toggleModalCard = (payload) => ({
  type: TOGGLE_MODAL_CARD,
  payload,
});

export const changeFieldCard = (payload) => ({
  type: CHANGE_FIELD_CARD,
  payload,
});

export const createCardSubmit = () => ({
  type: CREATE_CARD_SUBMIT,
});

export const createCardSuccess = (payload) => ({
  type: CREATE_CARD_SUCCESS,
  payload,
});

export const createCardError = () => ({
  type: CREATE_CARD_ERROR,
});

export const handleEditMode = () => ({
  type: HANDLE_EDIT_MODE,
});

export const deleteCard = (payload) => ({
  type: DELETE_CARD,
  payload,
});

export const deleteCardSuccess = (payload) => ({
  type: DELETE_CARD_SUCCESS,
  payload,
});

export const deleteCardError = () => ({
  type: DELETE_CARD_ERROR,
});

export const toggleModalList = () => ({
  type: TOGGLE_MODAL_LIST,
});
