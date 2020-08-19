import { connect } from 'react-redux';
import ArticlesView from '../components/ArticlesView';

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesView);
