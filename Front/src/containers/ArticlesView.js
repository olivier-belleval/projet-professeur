import { connect } from 'react-redux';
import ArticlesView from '../components/ArticlesView';
import { getArticles } from '../store/action/data-actions';
import { closeMenu } from '../store/action';

const mapStateToProps = (state) => ({
  list: state.articles.list,
  username: state.user.username,
  teacher: state.user.teacher,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles());
  },

  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesView);
