import React from 'react';
import { FaBars } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import './style.scss';

const TogglerMenu = ({
  opened, onOpenClick, handleLogout,
}) => {
  const cssClassNames = opened ? 'settings-icon-burger-bar menu-open' : 'settings-icon-burger-bar';
  return (
    <div className="settings">
      <div className="settings-button" onClick={onOpenClick}>
        <div className="settings-icon">
          {/* <FaBars /> */}
          <div className="settings-icon-burger">
            <div className={cssClassNames} />
            <div className={cssClassNames} />
            <div className={cssClassNames} />
          </div>

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

        <NavLink
          key="4"
          exact="true"
          to="/"
          onClick={() => {
            handleLogout();
            onOpenClick();
          }}
        >
          <div className="settings-nav">se déconnecter</div>
        </NavLink>

      </div>
      )}
    </div>
  );
};

export default TogglerMenu;
