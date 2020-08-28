import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

const mapStateToProps = (state) => ({
  isClicked: state.user.isClicked,
  isLogged: state.user.isLogged,
  teacher: state.user.teacher,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenClick: () => {
    console.log('open or close login form');
    dispatch(toggleLoginForm());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
