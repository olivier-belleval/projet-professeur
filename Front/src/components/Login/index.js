/**
 * import modules
 */
import React, { useEffect, useState } from 'react';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

/**
 * import locals
 */
import './style.scss';

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
  handleClassesLogin,
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

  const handleSubmitStudent = (evt) => {
    evt.preventDefault();
    handleClassesLogin();
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };
  useEffect(() => {
    getClasses();
  }, []);

  const [showedPassword, setShowedPassword] = useState(false);

  return (
    <div className="login">
      { loginOpened && loading && ('Connexion en cours...')}
      {!isLogged && !loginOpened && (
        <button type="button" className="login-button" onClick={onOpenClick}> Connexion</button>
      )}
      {!isLogged && loginOpened && !loading && (
        <div className="login-form">
          <form className="form" onSubmit={teacher ? handleSubmit : handleSubmitStudent}>
            <div className="login-form-inputs">
              {teacher && (
              <input
                name="username"
                value={username}
                className="login-form-inputs-username"
                onChange={handleInputChange}
                type="text"
                placeholder="nom d'utilisateur"
              />
              )}
              {!teacher && (
              <select
                name="username"
                className="login-form-inputs-username login-form-select"
                onChange={handleInputChange}
                value={username}
              >
                <option>je choisis ma classe</option>
                {classes.map((item) => (
                  <option
                    value={item.class_usernames}
                    key={item.class_id}
                  >{item.class_usernames}
                  </option>
                ))}
              </select>
              )}
              <input
                name="password"
                className="inputs-password"
                value={password}
                onChange={handleInputChange}
                type={showedPassword ? 'text' : 'password'}
                placeholder="mot de passe"
              />
              <span
                className="show-password-eye"
                onClick={() => {
                  setShowedPassword(!showedPassword);
                }}
              >
                {showedPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
              </span>
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
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loginOpened: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.arrayOf(PropTypes.shape({
    class_usernames: PropTypes.string.isRequired,
    class_id: PropTypes.number.isRequired,
  })).isRequired,
  teacher: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleClassesLogin: PropTypes.func.isRequired,
  onOpenClick: PropTypes.func.isRequired,
  onTeacherClick: PropTypes.func.isRequired,
  getClasses: PropTypes.func.isRequired,
};

export default Login;
