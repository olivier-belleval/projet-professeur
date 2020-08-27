import { connect } from 'react-redux';
import TextEditorClass from '../components/TextEditorClass';

import { updateClassEditorState, createClassSubmit } from '../store/action/class-editor-action';

const mapStateToProps = (state) => ({
  username: state.editorClass.username,
  password: state.editorClass.password,
  description: state.editorClass.description,
  loading: state.editorClass.loading,
  message: state.editorClass.message,
  send: state.editorClass.send,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (changedData) => {
    console.log(changedData);
    dispatch(updateClassEditorState(changedData));
  },
  handleClassSubmit: () => {
    console.log('soumission formulaire');
    dispatch(createClassSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorClass);
