// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import


import TogglerMenu from '../../containers/TogglerMenu';
import Article from '../Article';
import Kanban from '../Kanban';
import Admin from '../Admin';
import Logout from '../Logout';
import AdminArticle from '../../containers/AdminArticle';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <TogglerMenu />
    <Switch>
      <Route exact path="/" />
      <Route exact path="/articles" component={Article} />
      <Route exact path="/kanban" component={Kanban} />
      <Route exact path="/espace-admin" component={Admin} />
      <Route exact path="/se-deconnecter" component={Logout} />
      <Route exact path="/admin/articles" component={AdminArticle} />
      {/* //<AdminArticle /> */}
    </Switch>

  </div>
);

// == Export
export default App;
