import React, { useEffect, useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

import {RiEyeCloseLine, RiEyeLine} from 'react-icons/ri';

const Login = ({
  // data from state
  username,
  password,
  isLogged,
  loginOpened,
  loading,
  classes,
  teacher,
  message,
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
      { loginOpened && loading && <span>Connexion en cours...</span>}
      {!isLogged && !loginOpened && (
        <button type="button" className="login-button" onClick={onOpenClick}> Connexion</button>
      )}
      {!isLogged && loginOpened && !loading && (
        <div className="login-form">
          <form className="form" onSubmit={teacher ? handleSubmit : handleSubmitStudent}>
            <div className="login-form-inputs">
              {message && (
              <div className="login-form-error-message">
                {message}
              </div>
              )}
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
                  <option
                  value={item.class_usernames}
                  key={item.class_id}>{item.class_usernames}</option>
                ))}
              </select>
              )}
              <input
                name="password"
                value={password}
                onChange={handleInputChange}
                type={showedPassword ? "text" : "password"}
                placeholder="mot de passe"
              /> <span onClick={()=>{
                setShowedPassword(!showedPassword);
              }}>
              {showedPassword ? <RiEyeLine/> : <RiEyeCloseLine/>}
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
  username: PropTypes.string,
  password: PropTypes.string,
  changeField: PropTypes.func,
  isLogged: PropTypes.bool,
  opened: PropTypes.bool,
  handleLogin: PropTypes.func,
};

export default Login;
