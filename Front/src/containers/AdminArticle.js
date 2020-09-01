import { connect } from 'react-redux';
import AdminArticle from '../components/AdminArticle';
import { modifyArticle, joinClass, closeMenu } from '../store/action';
import { getArticles, getArticle } from '../store/action/data-actions';
import { deleteArticle, getArticlesAdminPanel, editArticle } from '../store/action/AdminArticle';

const mapState = (state) => ({
  list: state.articles.list,
  article_id: state.articles.article_id,
  id_edited_article: state.editor.id_edited_article,
});

const mapDispatch = (dispatch) => ({

  onclickJoin: () => {
    console.log("l'user veut associer de nouvelles classes");
    dispatch(joinClass());
  },

  getArticles: () => {
    dispatch(getArticlesAdminPanel());
  },

  deleteArticle: (id) => {
    dispatch(deleteArticle(id));
  },

  editArticle: (id) => {
    console.log('modifier', id);
    dispatch(editArticle(id));
  },

  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapState, mapDispatch)(AdminArticle);
