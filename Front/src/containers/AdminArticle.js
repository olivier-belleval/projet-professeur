import { connect } from 'react-redux';
import AdminArticle from '../components/AdminArticle';

import {
  deleteArticle,
  getArticlesAdminPanel,
  editArticle,
  toggleAddClassModal,
  changeField,
  submitAssociationArticle,
} from '../store/action/AdminArticle';

import { getClassesAdminPanel } from '../store/action/AdminClass';

const mapState = (state) => ({
  list: state.articles.list,
  classes: state.user.classes,
  article_id: state.articles.article_id,
  id_edited_article: state.editor.id_edited_article,
  modalOpen: state.admin.modalOpen,
  item_id: state.admin.item_id,
  classAdded: state.admin.classAdded,
});

const mapDispatch = (dispatch) => ({

  getArticles: () => {
    dispatch(getArticlesAdminPanel());
  },

  deleteArticle: (id) => {
    dispatch(deleteArticle(id));
  },

  editArticle: (id) => {
    dispatch(editArticle(id));
  },
  // Controlled input for card form in kanban
  changeField: (changedData) => {
    dispatch(changeField(changedData));
  },

  onOpenClick: (id) => {
    dispatch(toggleAddClassModal(id));
  },

  getClasses: () => {
    dispatch(getClassesAdminPanel());
  },
  handleSubmitAssociation: () => {
    dispatch(submitAssociationArticle());
  },
});

export default connect(mapState, mapDispatch)(AdminArticle);
