import React, {useEffect} from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Login = ({
  // data from state
  username,
  password,
  isLogged,
  loginOpened,
  loading,
  classes,
  teacher,
  // func which dispatch
  handleLogin,
  changeField,
  onOpenClick,
  onTeacherClick,
  getClasses,
}) => {
  // function to prevent from page reloading + function to change input's value asap user types
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };
  useEffect(() => {
    getClasses();
  }, []);

  return (
    <div className="login">
      { loginOpened && loading && <span>Connexion en cours...</span>}
      {!isLogged && !loginOpened && (
        <button type="button" className="login-button" onClick={onOpenClick}> Connexion</button>
      )}
      {!isLogged && loginOpened && !loading && (
        <div className="login-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="login-form-inputs">
              {teacher && (
              <input
                name="username"
                value={username}
                onChange={handleInputChange}
                type="text"
                placeholder="nom d'utilisateur"
              />
              )}
              {!teacher && (
              <select
                name="username"
                onChange={handleInputChange}
                value={username}
                className="login-form-select"
              >
                <option>je choisis ma classe</option>
                {classes.map((item) => (
                  <option value={item} key={item}>{item}</option>
                ))}
              </select>
              )}
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
          <div className="login-admin" onClick={onTeacherClick}>espace {!teacher ? 'professeur' : 'élève'}</div>
        </div>
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
