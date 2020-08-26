import { connect } from 'react-redux';
import TextEditorClass from '../components/TextEditorClass';

import { updateEditorState, createClassSubmit } from '../store/action/class-editor-action';

const mapStateToProps = (state) => ({
  title: state.editorClass.title,
  content: state.editorClass.content,
  loading: state.editorClass.loading,
  message: state.editorClass.message,
  send: state.editorClass.send,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (changedData) => {
    dispatch(updateEditorState(changedData));
  },
  handleArticleSubmit: () => {
    dispatch(createClassSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorClass);
