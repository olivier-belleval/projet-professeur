import React from 'react';
import './style.scss';

const Admin = () => (
  <div className="admin_menu">
    <h2 className="admin_menu-title">Tableau administrateur</h2>
    <div className="admin_menu-button">Détails des articles</div>
    <div className="admin_menu-button">Détails des tableaux</div>
    <div className="admin_menu-button">Mon espace</div>
  </div>
);

export default Admin;
