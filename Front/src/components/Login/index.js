import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Login = ({username, password, changeField, isLogged, handleLogin}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('test');
    console.log (username);
    handleLogin();
  };
  const handleInputChange = (evt) =>{
    const { name, value } = evt.target;
    changeField({ 
      [name]: value})
  };
  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-inputs">
          <input
            name="username"
            value={username}
            onChange={handleInputChange}
            type="text"
            placeholder="nom d'utilisateur"
          />
          <input
            name="password"
            value={password}
            onChange={handleInputChange}
            type="password"
            placeholder="mot de passe"
          />
        </div>
        <button type="submit" className="login-form-button">Se connecter</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  changeField: PropTypes.func,
  isLogged: PropTypes.bool,
  handleLogin: PropTypes.func,

}

export default Login;
