import { connect } from 'react-redux';
import AdminArticle from '../components/AdminArticle';
import { modifyArticle, joinClass, closeMenu } from '../store/action';
import { getArticles, getArticle } from '../store/action/data-actions';


import {
  deleteArticle,
  getArticlesAdminPanel,
  editArticle,
  toggleAddClassModal,
  changeField,
  submitAssociationArticle,
  removeClassFromArticle,
  removedClassFromArticle,
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
  message: state.editor.message,
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

  closeMenu: () => {
    dispatch(closeMenu());},
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

  removeClassFromArticle: (id) => {
    console.log("l'user veut supprimer la classe dans l'article", id);
    dispatch(removeClassFromArticle(id));
  },

  removedClassFromArticle: (id) => {
    console.log("l'user veut supprimer la classe avec le nom suivant", id);
    dispatch(removedClassFromArticle(id));
  },
});

export default connect(mapState, mapDispatch)(AdminArticle);
