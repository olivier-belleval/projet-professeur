import { connect } from 'react-redux';
import ArticlesView from '../components/ArticlesView';

const mapStateToProps = (state) => ({
  teacher: state.teacher,
  isLogged: state.isLogged,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesView);
