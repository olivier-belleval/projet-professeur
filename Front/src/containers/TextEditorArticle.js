import { connect } from 'react-redux';
import TextEditorArticle from '../components/TextEditorArticle';
import { closeMenu } from '../store/action';
import {
  updateEditorState, createArticleSubmit, cancelEditingArticle, submitEditedArticle,
} from '../store/action/editor-actions';
import { getItemById } from '../store/reducers/textEditor';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.id);
  const id = Number(ownProps.match.params.id);

  return {
    articleEdited: getItemById(state, id),
    title: state.editor.title,
    content: state.editor.content,
    loading: state.editor.loading,
    message: state.editor.message,
    send: state.editor.send,
    editing: state.editor.editing,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (changedData) => {
    dispatch(updateEditorState(changedData));
  },
  handleArticleSubmit: () => {
    dispatch(createArticleSubmit());
  },
  cancelEditingArticle: () => {
    dispatch(cancelEditingArticle());
  },
  handleArticleEdit: () => {
    dispatch(submitEditedArticle());
  },

  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorArticle);
