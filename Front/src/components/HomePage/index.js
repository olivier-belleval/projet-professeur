import React from 'react';
import './style.scss';
import Login from '../../containers/Login';

const HomePage = () => (
  <div className="homepage">
    <h1 className="homepage-title">
      O'My Prof
    </h1>
    <Login />
  </div>
);

export default HomePage;
