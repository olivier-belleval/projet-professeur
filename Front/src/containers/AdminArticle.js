import { connect } from 'react-redux';
import AdminArticle from '../components/AdminArticle';
import { modifyArticle, deleteArticle, joinClass } from '../store/action';
import { getArticles } from '../store/action/data-actions';

const mapState = (state) => ({
  list: state.articles.list,
});

const mapDispatch = (dispatch) => ({
  onclickPen: () => {
    console.log("l'user veut modifier l'article");
    dispatch(modifyArticle());
  },

  onclickTrash: () => {
    console.log("l'user veut supprimer l'article");
    dispatch(deleteArticle());
  },

  onclickJoin: () => {
    console.log("l'user veut associer de nouvelles classes");
    dispatch(joinClass());
  },

  getArticles: () => {
    dispatch(getArticles());
  },
});

export default connect(mapState, mapDispatch)(AdminArticle);
