import { connect } from 'react-redux';
import ArticlesView from '../components/ArticlesView';

const mapStateToProps = (state) => ({
  teacher: state.teacher,
  articles: state.articles,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesView);
