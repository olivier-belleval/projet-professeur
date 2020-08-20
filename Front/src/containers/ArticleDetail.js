import { connect } from 'react-redux';
import ArticleDetail from '../components/ArticleDetail';
import { getArticleBySlug } from '../store/reducers/articles';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const { slug } = ownProps.match.params;
  return {
    article: getArticleBySlug(state, slug),
  }
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
