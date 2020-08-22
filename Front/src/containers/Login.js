import { connect } from 'react-redux';
import Login from '../components/Login';
import {
  loginSubmit,
  changeField,
  toggleLoginForm,
  loginChangeTeacher,
} from '../store/action';

import { loginClassesSubmit } from '../store/action/user'

import { logout } from '../store/action/user';
import { getClasses } from '../store/action/user'


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
    dispatch(loginSubmit());
  },
  // handle login for classes
  handleClassesLogin: () => {
    dispatch(loginClassesSubmit());
  },

  // toggle to open login form
  onOpenClick: () => {
    dispatch(toggleLoginForm());
  },
  //turn login window as teacher login windows
  onTeacherClick: () => {
    dispatch(loginChangeTeacher());
  },
  //get all classes from an axios request and deliver it into select input
  getClasses: () => {
    dispatch(getClasses());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
