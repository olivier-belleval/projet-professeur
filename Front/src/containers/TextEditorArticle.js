import { connect } from 'react-redux';
import TextEditorArticle from '../components/TextEditorArticle';

import { updateEditorState, createArticleSubmit } from '../store/action/editor-actions';
import { getItemById } from '../store/reducers/textEditor';

const mapStateToProps = (state, ownProps) => {
    console.log(id, ownProps);
    const { id } = ownProps.match.params;

  return{
  article: getItemById(state, id),
  title: state.editor.title,
  content: state.editor.content,
  loading: state.editor.loading,
  message: state.editor.message,
  send: state.editor.send,
}
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (changedData) => {
    dispatch(updateEditorState(changedData));
  },
  handleArticleSubmit: () => {
    dispatch(createArticleSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorArticle);
