import React from 'react';
import './style.scss';
import Login from '../../containers/Login';
import ArticlesView from '../../containers/ArticlesView';
import { Redirect } from 'react-router-dom';


const HomePage = ({isLogged}
  ) => {
    
  
  return (
  <div className="homepage">
    <h1 className="homepage-title">
      O'My Prof
    </h1>
    
    { !isLogged ? <Login /> : <Redirect to="/articles" />
    }
  </div>
);}

export default HomePage;
