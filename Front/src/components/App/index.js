// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// == Import
import './styles.scss';
import HomePage from '../../containers/HomePage';
import ArticleDetail from '../../containers/ArticleDetail';
import ArticlesView from '../../containers/ArticlesView';
import KanbansView from '../../containers/KanbansView';
import KanbanDetail from '../../containers/KanbanDetail';
import TogglerMenu from '../../containers/TogglerMenu';
import MenuDesktop from '../../containers/MenuDesktop';
import AdminArticle from '../../containers/AdminArticle';
import AdminKanban from '../../containers/AdminKanban';
import AdminClass from '../../containers/AdminClass';
import TextEditorArticle from '../../containers/TextEditorArticle';
import TextEditorClass from '../../containers/TextEditorClass';
import TextEditorKanban from '../../containers/TextEditorKanban';
import Admin from '../../containers/Admin';

// == Composant
const App = ({ isLogged, teacher }) => (

  <div className="app">
    <Route exact path="/" component={HomePage} />

    { isLogged ? (
      <div style={{minHeight:100+'vh'}}>
        <TogglerMenu />
        <MenuDesktop />
        <Switch>

          <Route exact path="/articles" component={ArticlesView} />
          <Route exact path="/article/:slug" component={ArticleDetail} />
          <Route exact path="/kanbans" component={KanbansView} />
          <Route exact path="/kanban/:slug" component={KanbanDetail} />

          { teacher && (
            <Switch>
              <Route exact path="/admin/articles" component={AdminArticle} />
              <Route exact path="/espace-admin" component={Admin} />
              <Route exact path="/admin/nouvel-article" component={TextEditorArticle} />
              <Route exact path="/admin/edit/article/:id" component={TextEditorArticle} />
              <Route exact path="/admin/kanban" component={AdminKanban} />
              <Route exact path="/admin/comptes" component={AdminClass} />
              <Route exact path="/admin/nouvelle-classe" component={TextEditorClass} />
              <Route exact path="/admin/edit/class/:id" component={TextEditorClass} />
              <Route exact path="/admin/nouveau-kanban" component={TextEditorKanban} />
              <Route exact path="/admin/edit/kanban/:id" component={TextEditorKanban} />
            </Switch>
          )}
        </Switch>
      </div>
    ) : <Redirect to="/" />}
  </div>

);

// == Export
export default App;
