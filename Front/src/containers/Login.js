import { connect } from 'react-redux';
import Login from '../components/Login';
import {
  loginSubmit,
  changeField,
  toggleLoginForm,
  loginChangeTeacher,
} from '../store/action';


const mapStateToProps = (state) => ({
  username: state.user.username,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loginOpened: state.user.loginOpened,
  loading: state.user.loading,
  classes: state.user.classes,
  teacher: state.user.teacher,
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
    console.log('click')
    dispatch(toggleLoginForm());
  },
  //turn login window as teacher login windows
  onTeacherClick: () => {
    dispatch(loginChangeTeacher());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
