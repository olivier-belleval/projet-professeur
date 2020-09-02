import React from 'react';
import './style.scss';
import { NavLink, Link } from 'react-router-dom';

const MenuDesktop = ({ handleLogout }) => (
  <header className="menu">

    <Link exact to="/">
      <div className="menu-title">O'MyProf</div>
    </Link>
    <nav className="menu-nav">
      <NavLink key="1" exact to="/articles">
        <div className="menu-link">articles</div>
      </NavLink>
      <NavLink key="2" exact to="/kanbans">
        <div className="menu-link">tableaux</div>
      </NavLink>
      <NavLink key="3" exact to="/espace-admin">
        <div className="menu-link">espace administrateur</div>
      </NavLink>
      <NavLink key="4" exact to="/" onClick={handleLogout}>
        <div className="menu-link">se déconnecter</div>
      </NavLink>

    </nav>
  </header>
);

export default MenuDesktop;
