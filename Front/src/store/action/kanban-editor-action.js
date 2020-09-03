export const UPDATE_KANBAN_EDITOR_STATE = 'UPDATE_KANBAN_EDITOR_STATE';
export const CREATE_KANBAN_SUBMIT = 'CREATE_KANBAN_SUBMIT';
export const CREATE_KANBAN_SUCCESS = 'CREATE_KANBAN_SUCCESS';
export const CREATE_KANBAN_ERROR = 'CREATE_KANBAN_ERROR';
export const CANCEL_EDITING_KANBAN = 'CANCEL_EDITING_KANBAN';
export const SUBMIT_EDITED_KANBAN = 'SUBMIT_EDITED_KANBAN';
export const EDIT_KANBAN_ERROR = 'EDIT_KANBAN_ERROR';
export const EDIT_KANBAN_SUCCESS = 'EDIT_KANBAN_SUCCESS';

export const TOGGLE_MODAL_LIST_EDITION = 'TOGGLE_MODAL_LIST_EDITION';
export const SUBMIT_LIST_EDITION = 'SUBMIT_LIST_EDITION';
export const LIST_EDITION_SUCCESS = 'LIST_EDITION_SUCCESS';
export const LIST_EDITION_ERROR = 'LIST_EDITION_ERROR';

export const GET_CARD_DETAILS = 'GET_CARD_DETAILS';
export const GET_LIST_DETAILS = 'GET_LIST_DETAILS';

export const TOGGLE_MODAL_CARD_EDITION = 'TOGGLE_MODAL_CARD_EDITION';
export const SUBMIT_CARD_EDITION = 'SUBMIT_CARD_EDITION';
export const CARD_EDITION_SUCCESS = 'CARD_EDITION_SUCCESS';
export const CARD_EDITION_ERROR = 'CARD_EDITION_ERROR';

export const updateKanbanEditorState = (payload) => ({
  type: UPDATE_KANBAN_EDITOR_STATE,
  payload,
});

export const createKanbanSubmit = () => ({
  type: CREATE_KANBAN_SUBMIT,
});

export const createKanbanError = (payload) => ({
  type: CREATE_KANBAN_ERROR,
  payload,
});

export const createKanbanSuccess = (payload) => ({
  type: CREATE_KANBAN_SUCCESS,
  payload,
});

export const cancelEditingKanban = () => ({
  type: CANCEL_EDITING_KANBAN,
});

export const editKanbanSuccess = (payload) => ({
  type: EDIT_KANBAN_SUCCESS,
  payload,
});

export const editKanbanError = (payload) => ({
  type: EDIT_KANBAN_ERROR,
  payload,
});

export const submitEditedKanban = () => ({
  type: SUBMIT_EDITED_KANBAN,
});

export const toggleModalListEdition = (payload) => ({
  type: TOGGLE_MODAL_LIST_EDITION,
  payload,
});

export const getListDetails = (payload) => ({
  type: GET_LIST_DETAILS,
  payload,
});

export const getCardDetails = (payload) => ({
  type: GET_CARD_DETAILS,
  payload,
});

export const submitListEdition = () => ({
  type: SUBMIT_LIST_EDITION,
});

export const listEditionSuccess = () => ({
  type: LIST_EDITION_SUCCESS,
});

export const listEditionError = (payload) => ({
  type: LIST_EDITION_ERROR,
  payload,
});

export const submitCardEdition = () => ({
  type: SUBMIT_CARD_EDITION,
});

export const cardEditionSuccess = () => ({
  type: CARD_EDITION_SUCCESS,
});

export const cardEditionError = (payload) => ({
  type: CARD_EDITION_ERROR,
  payload,
});

export const toggleModalCardEdition = (payload) => ({
  type: TOGGLE_MODAL_CARD_EDITION,
  payload,
});
