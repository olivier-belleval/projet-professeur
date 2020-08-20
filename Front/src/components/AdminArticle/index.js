import React from 'react';

import {
  FaPencilAlt, FaTrash, FaPlusCircle, FaInfinity,
} from 'react-icons/fa';
import './style.scss';

const AdminArticle = ({ list }) => {
  console.log(list);
  return (
    <div className="admin_panel_article">
      <h1 className="admin_panel_article-title"> Espace administrateur - gestion des articles </h1>
      <div className="admin_panel_article-content">
        <div className="admin_panel_article-content-part">
          <div className="admin_panel_article-content-part-article">article 1</div>
          <div className="admin_panel_article_content-part-class">
            <p>6e B</p>
          </div>
          <div className="admin_panel_article_content-part-icons">
            <div className="admin_panel_article_content-part-modify"><FaPencilAlt /></div>
            <div className="admin_panel_article_content-part-delete"><FaTrash /></div>
            <div className="admin_panel_article_content-part-join"><FaInfinity /></div>
          </div>
        </div>

        <div className="admin_panel_article-content-part">
          <div className="admin_panel_article-content-part-article">article 1 avec un titre très long pour voir si ça rend pas trop moche</div>
          <div className="admin_panel_article_content-part-class">
            <p>6e B</p>
          </div>
          <div className="admin_panel_article_content-part-icons">
            <div className="admin_panel_article_content-part-modify"><FaPencilAlt /></div>
            <div className="admin_panel_article_content-part-delete"><FaTrash /></div>
            <div className="admin_panel_article_content-part-join"><FaInfinity /></div>
          </div>
        </div>

        <div className="admin_panel_article-content-part">
          <div className="admin_panel_article-content-part-article">article 1 avec un titre très long et plusieurs classes pour voir si ça rend pas trop moche</div>
          <div className="admin_panel_article_content-part-class">
            <p>6e B</p>
            <p>6e C</p>
            <p>6e D</p>
            <p>6e A</p>
          </div>
          <div className="admin_panel_article_content-part-icons">
            <div className="admin_panel_article_content-part-modify"><FaPencilAlt /></div>
            <div className="admin_panel_article_content-part-delete"><FaTrash /></div>
            <div className="admin_panel_article_content-part-join"><FaInfinity /></div>
          </div>
        </div>

        <div className="admin_panel_article-content-part">
          <div className="admin_panel_article-content-part-article">article 2</div>
          <div className="admin_panel_article_content-part-class">
            <p>5e B</p>
            <p>5e A</p>
            <p>5e C</p>
          </div>
          <div className="admin_panel_article_content-part-icons">
            <div className="admin_panel_article_content-part-modify"><FaPencilAlt /></div>
            <div className="admin_panel_article_content-part-delete"><FaTrash /></div>
            <div className="admin_panel_article_content-part-join"><FaInfinity /></div>
          </div>
        </div>

        <div className="admin_panel_article-content-part">
          <div className="admin_panel_article-content-part-article">article 3</div>
          <div className="admin_panel_article_content-part-class">
            <p />
          </div>
          <div className="admin_panel_article_content-part-icons">
            <div className="admin_panel_article_content-part-modify"><FaPencilAlt /></div>
            <div className="admin_panel_article_content-part-delete"><FaTrash /></div>
            <div className="admin_panel_article_content-part-join"><FaInfinity /></div>
          </div>
        </div>

        <div className="admin_panel_article-content-part">
          <p>Ajouter un article</p>
          <FaPlusCircle />
        </div>
      </div>
    </div>
  );
};

export default AdminArticle;
