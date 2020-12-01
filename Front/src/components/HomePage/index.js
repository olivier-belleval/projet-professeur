/**
 * import modules
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * import locals
 */
import './style.scss';
import Login from '../../containers/Login';

const HomePage = ({ isLogged }) => (
  <div className="homepage">
    <h1 className="homepage-title">
      O'My Prof
    </h1>

    {
      !isLogged ? <Login /> : <Redirect to="/articles" />
    }
  </div>
);

HomePage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default HomePage;
