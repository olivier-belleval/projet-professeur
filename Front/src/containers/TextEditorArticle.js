import { connect } from 'react-redux';
import TextEditorArticle from '../components/TextEditorArticle';

import { updateEditorState } from '../store/action/editor-actions';

const mapStateToProps = (state) => ({
  title: state.editor.title,
  content: state.editor.content,
  excerpt: state.editor.excerpt,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (changedData) => {
    dispatch(updateEditorState(changedData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorArticle);
