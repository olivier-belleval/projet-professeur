import React from "react";
import "./style.scss";

const AdminPanel = () => (
  <header className="menu">
    <nav className="menu-nav">
      <a className="menu-link">article</a>
      <a className="menu-link active">tableaux</a>
      <a className="menu-link">mon espace</a>
      <a className="menu-link">deconnexion</a>
    </nav>
  </header>
);

export default AdminPanel;
