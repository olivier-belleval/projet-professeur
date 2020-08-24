import { connect } from 'react-redux';
import App from '../components/App';

const mapState = (state) => ({
  isLogged: state.user.isLogged,
  teacher: state.user.teacher,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(App);
