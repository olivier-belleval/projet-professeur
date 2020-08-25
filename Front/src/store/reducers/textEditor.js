import { UPDATE_EDITOR_STATE } from '../action/editor-actions';

const initialState = {
  title: '',
  content:'',
  excerpt:'',

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_EDITOR_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
