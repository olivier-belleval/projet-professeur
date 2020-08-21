// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.scss';
import HomePage from '../../containers/HomePage';
import ArticleDetail from '../../containers/ArticleDetail';
import ArticlesView from '../../containers/ArticlesView';
import KanbansView from '../../containers/KanbansView';
import KanbanDetail from '../../containers/KanbanDetail';
import TogglerMenu from '../../containers/TogglerMenu';
import AdminArticle from '../../containers/AdminArticle';
import Admin from '../Admin';


// == Composant
const App = () => (
  <div className="app">
    
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/articles" component={ArticlesView} />
      <Route exact path="/article/:slug" component={ArticleDetail} />
      <Route exact path="/kanbans" component={KanbansView} />
      <Route exact path="/kanban:slug" component={KanbanDetail} />
      <Route exact path="/admin/articles" component={AdminArticle} />
      <Route exact path="/espace-admin" component={Admin} />
    </Switch><TogglerMenu />






  </div>
);

// == Export
export default App;
