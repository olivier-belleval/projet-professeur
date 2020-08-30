import { connect } from 'react-redux';
import TextEditorClass from '../components/TextEditorClass';

import {
  updateClassEditorState, createClassSubmit, cancelEditingClass, submitEditedClass,
} from '../store/action/class-editor-action';

import { getItemById } from '../store/reducers/classEditor';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.id);
  const id = Number(ownProps.match.params.id);
  return {
    classEdited: getItemById(state, id),
    username: state.editorClass.username,
    password: state.editorClass.password,
    description: state.editorClass.description,
    loading: state.editorClass.loading,
    message: state.editorClass.message,
    send: state.editorClass.send,
    editing: state.editorClass.editing,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (changedData) => {
    console.log(changedData);
    dispatch(updateClassEditorState(changedData));
  },
  handleClassSubmit: () => {
    console.log('soumission formulaire');
    dispatch(createClassSubmit());
  },
  cancelEditingClass: () => {
    dispatch(cancelEditingClass());
  },
  handleClassEdit: () => {
    dispatch(submitEditedClass());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorClass);
