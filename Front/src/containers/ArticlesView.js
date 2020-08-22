import { connect } from 'react-redux';
import ArticlesView from '../components/ArticlesView';
import { getArticles } from '../store/action/data-actions';

const mapStateToProps = (state) => ({
  list: state.articles.list,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => {
    console.log("i'm gonna get articles yahoo");
    dispatch(getArticles());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesView);
