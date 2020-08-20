import React from 'react';
import './style.scss';
import Login from '../../containers/Login';
import ArticlesView from '../../containers/ArticlesView';


const HomePage = ({isLogged}
  ) => (
  <div className="homepage">
    <h1 className="homepage-title">
      O'My Prof
    </h1>
    
    { !isLogged ? <ArticlesView /> : <Login />
    }
  </div>
);

export default HomePage;
