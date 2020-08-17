import { connect } from 'react-redux';
import Login from '../components/Login';
import { login, changeField } from '../store/action';

const mapStateToProps = (state)=> ({
  username: state.username,
  password: state.password,
  isLogged: state.isLogged,
})

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const changeObject = {
      [name]: value,
    };
    console.log("Je viens du container", changeObject);
    dispatch(changeField(changeObject));
  },

  handleLogin: () => {
    dispatch(login());
    console.log("je me log")
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
