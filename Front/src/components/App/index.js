// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import HomePage from '../../containers/HomePage';

// == Composant
const App = () => (
  <div className="app">
    <h1>Here we are (à modifier direct dans app)</h1>
    <HomePage />
  </div>
);

// == Export
export default App;
