import { connect } from 'react-redux';
import TextEditorClass from '../components/TextEditorClass';

import { updateEditorState, createClassSubmit } from '../store/action/class-editor-action';

const mapStateToProps = (state) => ({
  username: state.editorClass.title,
  password: state.editorClass.content,
  description: state.editorClass.description,
  loading: state.editorClass.loading,
  message: state.editorClass.message,
  send: state.editorClass.send,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (changedData) => {
    console.log(changedData);
    dispatch(updateEditorState(changedData));
  },
  handleClassSubmit: () => {
    console.log('soumission formulaire');
    dispatch(createClassSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorClass);
