import { connect } from 'react-redux';
import AdminArticle from '../components/AdminArticle';

const mapState = (state) => ({
  list: state.data,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(AdminArticle);

