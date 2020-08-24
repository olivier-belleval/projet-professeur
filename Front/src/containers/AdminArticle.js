import { connect } from 'react-redux';
import AdminArticle from '../components/AdminArticle';
import { modifyArticle, joinClass } from '../store/action';
import { getArticles, getArticle } from '../store/action/data-actions';
import { deleteArticle} from '../store/action/AdminArticle'

const mapState = (state) => ({
  list: state.articles.list,
  article_id: state.articles.article_id,
});

const mapDispatch = (dispatch) => ({
  onclickPen: () => {
    console.log("l'user veut modifier l'article");
    dispatch(modifyArticle());
  },

  onclickJoin: () => {
    console.log("l'user veut associer de nouvelles classes");
    dispatch(joinClass());
  },

  getArticles: () => {
    dispatch(getArticles());
  },

  deleteArticle : (id) => {
    dispatch(deleteArticle(id));
  }
});

export default connect(mapState, mapDispatch)(AdminArticle);
