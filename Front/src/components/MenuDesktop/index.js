import React from 'react';
import './style.scss';
import { NavLink, Link } from 'react-router-dom';

const MenuDesktop = ({ handleLogout, teacher }) => (
  <header className="menu">

    <NavLink exact to="/" activeClassName="active">
      <div className="menu-title">O'MyProf</div>
    </NavLink>
    <nav className="menu-nav">
      <NavLink key="1" exact to="/articles" activeClassName="active">
        <div className="menu-link">articles</div>
      </NavLink>
      <NavLink key="2" exact to="/kanbans" activeClassName="active">
        <div className="menu-link">tableaux</div>
      </NavLink>
      {teacher && (
      <NavLink key="3" exact to="/espace-admin" activeClassName="active">
        <div className="menu-link">espace administrateur</div>
      </NavLink>
      )}
      
        <div className="menu-link" onClick={handleLogout}> <a>se déconnecter</a></div>


    </nav>
  </header>
);

export default MenuDesktop;
