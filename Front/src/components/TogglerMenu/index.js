import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

import { slugifyTitle } from '../../utils';

const TogglerMenu = ({ opened, onOpenClick, path }) => (
  <div className="settings">
    <div className="settings-button" onClick={onOpenClick}>
      menu
    </div>
    {opened && (
    <div className="settings-menu">
      {/* {
      path.map((url) => (
        <NavLink key={url} exact to={slugifyTitle(url)}>
          <div className="settings-nav">{url}</div>
        </NavLink>
      ))
    } */}

      {
      path.map((url) => (
        <NavLink key={url} exact to={slugifyTitle(url)}>
          <div className="settings-nav">{url}</div>
        </NavLink>
      ))
    }

    </div>
    )}
  </div>
);

export default TogglerMenu;
