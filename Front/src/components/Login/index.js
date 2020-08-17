import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Login = ({
  // data from state
  username,
  password,
  isLogged,
  opened,
  // func which dispatch
  handleLogin,
  changeField,
  onOpenClick,
}) => {
  console.log(isLogged);
  // function to prevent from page reloading + function to change input's value asap user types
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };
  return (
    <div className="login">
      {!isLogged && !opened && (
        <button type="button" className="login-button" onClick={onOpenClick}> Connexion</button>
      )}
      {!isLogged  && opened && (
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
      )}
    </div>
  );
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  changeField: PropTypes.func,
  isLogged: PropTypes.bool,
  opened: PropTypes.bool,
  handleLogin: PropTypes.func,
};

export default Login;
