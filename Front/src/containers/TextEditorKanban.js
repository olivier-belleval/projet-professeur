import { connect } from 'react-redux';
import TextEditorKanban from '../components/TextEditorKanban';

import { updateKanbanEditorState, createKanbanSubmit } from '../store/action/kanban-editor-action';

const mapStateToProps = (state) => ({
  title: state.editorKanban.title,
  background: state.editorKanban.background,
  description: state.editorKanban.description,
  loading: state.editorKanban.loading,
  message: state.editorKanban.message,
  send: state.editorKanban.send,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (changedData) => {
    console.log(changedData);
    dispatch(updateKanbanEditorState(changedData));
  },
  handleKanbanSubmit: () => {
    console.log('soumission formulaire');
    dispatch(createKanbanSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorKanban);
