import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  FaPencilAlt, FaTrash, FaPlusCircle, FaInfinity,
} from 'react-icons/fa';
import './style.scss';

const AdminArticle = ({
  list,
  deleteArticle,
  onclickJoin,
  getArticles,
  editArticle,
  closeMenu,
}) => {
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div className="admin_panel_article" onClick={closeMenu}>
      <h1 className="admin_panel_article-title"> Espace administrateur - gestion des articles </h1>
      <div className="admin_panel_article-content">
        {list.map((article) => (
          <div className="admin_panel_article-content-part" key={article.article_id}>
            <div className="admin_panel_article-content-part-article">{article.article_title}</div>

            <div className="admin_panel_article_content-part-class">

              {article.class_username && article.class_username.map((classes) => <span className="classusername-tag" key={classes}> {classes}</span>)}

            </div>

            <div className="admin_panel_article_content-part-icons">
              <div className="admin_panel_article_content-part-modify">
                <Link to={`/admin/edit/article/${article.article_id}`} key={article.article_id}>
                  <FaPencilAlt onClick={() => {
                    editArticle(article.article_id);
                  }}
                  />
                </Link>
              </div>
              <div className="admin_panel_article_content-part-delete"><FaTrash onClick={() => {
                deleteArticle(article.article_id);
              }}
              />
              </div>
              <div className="admin_panel_article_content-part-join"><FaInfinity onClick={() => {
                onclickJoin();
              }}
              />
              </div>
            </div>
          </div>
        ))}

        <div className="admin_panel_article-content-part">
          <p>Ajouter un article</p>
          <Link exact="true" to="/admin/nouvel-article">
            <FaPlusCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminArticle;
