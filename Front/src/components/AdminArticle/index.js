import React from 'react';
import './style.scss';

const AdminArticle = () => (
  <div className="admin_panel_article">
    <h1 className="admin_panel_article-title"> Espace administrateur - gestion des articles </h1>
    <div className="admin_panel_article-content">
      <div className="admin_panel_article-content-part">
        <div className="admin_panel_article-content-part-article">article 1</div>
        <div className="admin_panel_article_content-part-class">
          <p>6e B</p>
        </div>
        <div className="admin_panel_article_content-part-modify">modifier</div>
        <div className="admin_panel_article_content-part-delete">effacer</div>
      </div>

      <div className="admin_panel_article-content-part">
        <div className="admin_panel_article-content-part-article">article 1 avec un titre très long pour voir si ça rend pas trop moche</div>
        <div className="admin_panel_article_content-part-class">
          <p>6e B</p>
        </div>
        <div className="admin_panel_article_content-part-modify">modifier</div>
        <div className="admin_panel_article_content-part-delete">effacer</div>
      </div>

      <div className="admin_panel_article-content-part">
        <div className="admin_panel_article-content-part-article">article 2</div>
        <div className="admin_panel_article_content-part-class">
          <p>5e B</p>
          <p>5e A</p>
        </div>
        <div className="admin_panel_article_content-part-modify">modifier</div>
        <div className="admin_panel_article_content-part-delete">effacer</div>
      </div>

      <div className="admin_panel_article-content-part">
        <div className="admin_panel_article-content-part-article">article 3</div>
        <div className="admin_panel_article_content-part-class">
          <p></p>
        </div>
        <div className="admin_panel_article_content-part-modify">modifier</div>
        <div className="admin_panel_article_content-part-delete">effacer</div>
      </div>
    </div>
  </div>

);

export default AdminArticle;
