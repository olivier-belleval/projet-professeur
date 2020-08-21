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
import Article from '../Article';
import Kanban from '../Kanban';
import Admin from '../Admin';
import Logout from '../Logout';
import AdminArticle from '../../containers/AdminArticle';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/articles" component={ArticlesView} />
      <Route exact path="/article/:slug" component={ArticleDetail} />
      <Route exact path="/kanbans" component={KanbansView} />
      <Route exact path="/kanban:slug" component={KanbanDetail} />
    </Switch>
    <TogglerMenu />
    <Switch>
      <Route exact path="/" />
      <Route exact path="/articles" component={Article} />
      <Route exact path="/kanban" component={Kanban} />
      <Route exact path="/espace-admin" component={Admin} />
      <Route exact path="/se-deconnecter" component={Logout} />
      <Route exact path="/admin/articles" component={AdminArticle} />
    </Switch>

  </div>
);

// == Export
export default App;
