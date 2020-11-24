import { connect } from 'react-redux';
import TextEditorKanban from '../components/TextEditorKanban';

import {
  updateKanbanEditorState,
  createKanbanSubmit,
  cancelEditingKanban,
  submitEditedKanban,
} from '../store/action/kanban-editor-action';

import { getItemById } from '../store/reducers/kanbanEditor';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.id);
  const id = Number(ownProps.match.params.id);

  return {
    kanbanEdited: getItemById(state, id),
    title: state.editorKanban.title,
    background: state.editorKanban.background,
    description: state.editorKanban.description,
    loading: state.editorKanban.loading,
    message: state.editorKanban.message,
    send: state.editorKanban.send,
    editing: state.editorKanban.editing,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (changedData) => {
    console.log(changedData);
    dispatch(updateKanbanEditorState(changedData));
  },
  handleKanbanSubmit: () => {
    console.log('soumission formulaire');
    dispatch(createKanbanSubmit());
  },
  cancelEditingKanban: () => {
    dispatch(cancelEditingKanban());
  },
  handleKanbanEdit: () => {
    dispatch(submitEditedKanban());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorKanban);
