import { connect } from 'react-redux';
import TextEditorArticle from '../components/TextEditorArticle';

import { updateEditorState, createArticleSubmit} from '../store/action/editor-actions';

const mapStateToProps = (state) => ({
  title: state.editor.title,
  content: state.editor.content,
  loading: state.editor.loading,
  message: state.editor.message,
  send: state.editor.send,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (changedData) => {
    dispatch(updateEditorState(changedData));
  },
  handleArticleSubmit: () => {
    dispatch(createArticleSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorArticle);
