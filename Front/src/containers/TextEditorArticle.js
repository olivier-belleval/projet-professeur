import { connect } from 'react-redux';
import TextEditorArticle from '../components/TextEditorArticle';

import { updateEditorState } from '../store/action/editor-actions';

const mapStateToProps = (state) => ({
  editorState: state.editor.editorState,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (editorState) => {
    dispatch(updateEditorState(editorState));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorArticle);
