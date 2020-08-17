import { connect } from 'react-redux';
import Login from '../components/Login';
import { login, changeField, toggleLoginForm } from '../store/action';

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  isLogged: state.isLogged,
  opened: state.loginOpened,
});

// to handle changes in login inputs
const mapDispatchToProps = (dispatch) => ({
  changeField: (changedData) => {
    dispatch(changeField(changedData));
  },

  handleLogin: () => {
    dispatch(login());
    console.log("logging");
  },

  onOpenClick: () => {
    console.log("open or close login form");
    dispatch(toggleLoginForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
