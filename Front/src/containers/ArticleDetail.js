import { connect } from 'react-redux';
import ArticleDetail from '../components/ArticleDetail';
import { getArticleBySlug } from '../store/reducers/articles';
import { closeMenu } from '../store/action';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const { slug } = ownProps.match.params;
  return {
    article: getArticleBySlug(state, slug),
  }
};

const mapDispatchToProps = (dispatch) => ({

  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);

