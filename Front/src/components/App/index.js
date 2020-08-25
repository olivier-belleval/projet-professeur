// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import './styles.scss';
import HomePage from '../../containers/HomePage';
import ArticleDetail from '../../containers/ArticleDetail';
import ArticlesView from '../../containers/ArticlesView';
import KanbansView from '../../containers/KanbansView';
import KanbanDetail from '../../containers/KanbanDetail';
import TogglerMenu from '../../containers/TogglerMenu';
import AdminArticle from '../../containers/AdminArticle';
import TextEditorArticle from '../../containers/TextEditorArticle';
import Admin from '../Admin';

// == Composant
const App = ({ isLogged, teacher}) => (

  <div className="app">
    <Route exact path="/" component={HomePage} />

    { isLogged ? (
      <div>
        <TogglerMenu />
        <Switch>

          <Route exact path="/articles" component={ArticlesView} />
          <Route exact path="/article/:slug" component={ArticleDetail} />
          <Route exact path="/kanbans" component={KanbansView} />
          <Route exact path="/kanban/:slug" component={KanbanDetail} />
          <Route exact path="/admin/articles" component={AdminArticle} />
          { teacher && (
            <Switch>
            <Route exact path="/espace-admin" component={Admin} />
            <Route exact path="/admin/nouvel-article" component={TextEditorArticle} />
            </Switch>
          )}
        </Switch>
      </div>
    ) : <Redirect to="/" />}

  </div>
);

// == Export
export default App;
