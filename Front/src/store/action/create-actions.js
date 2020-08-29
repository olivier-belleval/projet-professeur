export const TOGGLE_MODAL_CARD = 'TOGGLE_MODAL_CARD';
export const CHANGE_FIELD_CARD = 'CHANGE_FIELD_CARD';
export const CREATE_CARD_SUBMIT = 'HANDLE_CARD_SUBMIT';
export const CREATE_CARD_SUCCESS = 'CREATE_CARD_SUCCESS';
export const CREATE_CARD_ERROR = 'CREATE_CARD_ERROR';
export const HANDLE_EDIT_MODE = 'HANDLE_EDIT_MODE';

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