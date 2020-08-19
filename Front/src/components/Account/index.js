import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

const Account = () => (
  <div className="account">
    <h2 className="account-title">Tableau administrateur</h2>
    <NavLink exact to="/admin/articles" className="account-button">
      <div>Détails des articles</div>
    </NavLink>
    <NavLink exact to="/admin/kanban" className="account-button">
      <div>Détails des tableaux</div>
    </NavLink>
    <NavLink exact to="/admin/comptes" className="account-button">
      <div>Mes comptes</div>
    </NavLink>
  </div>
);

export default Account;
