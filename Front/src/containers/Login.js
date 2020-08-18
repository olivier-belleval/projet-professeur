import { connect } from 'react-redux';
import Login from '../components/Login';
import {
  loginSubmit,
  changeField,
  toggleLoginForm,
} from '../store/action';

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  isLogged: state.isLogged,
  opened: state.loginOpened,
  loading: state.loading,
});


const mapDispatchToProps = (dispatch) => ({
  // to handle changes in login inputs
  changeField: (changedData) => {
    dispatch(changeField(changedData));
  },
  // changing loading value to true
  handleLogin: () => {
    console.log('handlelogin:submit');
    dispatch(loginSubmit());
  },
  // toggle to open login form
  onOpenClick: () => {
    dispatch(toggleLoginForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
