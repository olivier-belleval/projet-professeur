/**
 * import modules
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

/**
 * import components
 */
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
import NotFound from '../NotFound';

/**
 * import locals
 */
import './styles.scss';

// == Composant
const App = ({ isLogged, teacher }) => (

  <div className="app">
    <Route exact path="/" component={HomePage} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastClassName="toast"
    />
    { isLogged ? (
      <div>
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
              <Route component={NotFound} />
            </Switch>
          )}
          <Route component={NotFound} />
        </Switch>
      </div>
    ) : <Redirect to="/" />}
  </div>

);

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  teacher: PropTypes.bool.isRequired,
};

// == Export
export default App;
