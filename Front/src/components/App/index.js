// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.scss';
import HomePage from '../../containers/HomePage';
import ArticleDetail from '../../containers/ArticleDetail';
import ArticlesView from '../../containers/ArticlesView';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/articles" component={ArticlesView} />
      <Route exact path="/article/:slug" component={ArticleDetail} />
    </Switch>
  </div>
);

// == Export
export default App;
