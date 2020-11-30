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

const Admin = ({ closeMenu }) => (
  <div className="admin_menu" onClick={closeMenu}>
    <h2 className="admin_menu-title">Tableau administrateur</h2>
    <NavLink exact to="/admin/articles" className="admin_menu-button">
      <div>Détails des articles</div>
    </NavLink>
    <NavLink exact to="/admin/kanban" className="admin_menu-button">
      <div>Détails des tableaux</div>
    </NavLink>
    <NavLink exact to="/admin/comptes" className="admin_menu-button">
      <div>Mes comptes</div>
    </NavLink>
  </div>
);

Admin.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Admin;
