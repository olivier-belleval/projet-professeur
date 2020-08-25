import { EditorState } from 'draft-js';
import { UPDATE_EDITOR_STATE } from '../action/editor-actions';

const initialState = {
  editorState: EditorState.createEmpty(),
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_EDITOR_STATE:
      return {
        ...state,
        editorState: action.payload,
      };
    default:
      return state;
  }
};
