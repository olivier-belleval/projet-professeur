import { connect } from 'react-redux';
import AdminArticle from '../components/AdminArticle';
import { modifyArticle, deleteArticle, joinClass } from '../store/action';

const mapState = (state) => ({
  list: state.data,
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
});

export default connect(mapState, mapDispatch)(AdminArticle);
