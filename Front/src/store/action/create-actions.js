export const TOGGLE_MODAL_CARD = 'TOGGLE_MODAL_CARD';
export const CHANGE_FIELD_CARD = 'CHANGE_FIELD_CARD';

export const toggleModalCard = () => ({
  type: TOGGLE_MODAL_CARD,
});

export const changeFieldCard = (payload) => ({
  type: CHANGE_FIELD_CARD,
  payload,
});
