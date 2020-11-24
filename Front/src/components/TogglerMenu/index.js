import React from 'react';
import { FaBars } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import './style.scss';

import { slugifyTitle } from '../../utils';
import Admin from '../Admin';

const tab = [
  'articles',
  'kanbans',
  'espace-admin',
  'se-deconnecter',
];

const TogglerMenu = ({
  opened, onOpenClick, path, handleLogout,
}) => (
  <div className="settings">
    <div className="settings-button" onClick={onOpenClick}>
      <div className="settings-icon">
        <FaBars />
      </div>
    </div>
    {opened && (
    <div className="settings-menu">

      <NavLink key="1" exact to="/articles">
        <div className="settings-nav" onClick={onOpenClick}>articles</div>
      </NavLink>

      <NavLink key="2" exact to="/kanbans">
        <div className="settings-nav" onClick={onOpenClick}>tableaux</div>
      </NavLink>

      <NavLink key="3" exact to="/espace-admin">
        <div className="settings-nav" onClick={onOpenClick}>espace admin</div>
      </NavLink>

      <NavLink key="4" exact to="/" onClick={handleLogout}>
        <div className="settings-nav">se déconnecter</div>
      </NavLink>

    </div>
    )}
  </div>
);

export default TogglerMenu;
