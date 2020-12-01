/**
 * import modules
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * import locals
 */
import './style.scss';

const TogglerMenu = ({
  opened,
  onOpenClick,
  handleLogout,
  teacher,
}) => {
  const cssClassNames = opened ? 'settings-icon-burger-bar menu-open' : 'settings-icon-burger-bar';
  return (
    <div className="settings">
      <div className="settings-button" onClick={onOpenClick}>
        <div className="settings-icon">
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
          {teacher && (
            <div>
              <NavLink key="3" exact to="/espace-admin">
                <div className="settings-nav" onClick={onOpenClick}>espace admin</div>
              </NavLink>

            </div>
          )}
          <div
            className="settings-nav"
            onClick={() => {
              handleLogout();
              onOpenClick();
            }}
          >
            <a>se déconnecter</a>
          </div>
        </div>
      )};
    </div>
  );
};

TogglerMenu.propTypes = {
  opened: PropTypes.bool.isRequired,
  teacher: PropTypes.bool.isRequired,
  onOpenClick: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default TogglerMenu;
