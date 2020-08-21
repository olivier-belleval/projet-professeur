import React from 'react';

import {
  FaPencilAlt, FaTrash, FaPlusCircle, FaInfinity,
} from 'react-icons/fa';
import './style.scss';


const AdminArticle = ({ list, onclickPen, onclickTrash, onclickJoin }) => {
  console.log(list);
  return (
    <div className="admin_panel_article">
      <h1 className="admin_panel_article-title"> Espace administrateur - gestion des articles </h1>
      <div className="admin_panel_article-content">
        {list.map((article) => (
          <div className="admin_panel_article-content-part">
            <div className="admin_panel_article-content-part-article">{article.title}</div>
            <div className="admin_panel_article_content-part-class">
              <p>{article.class}</p>
            </div>
            <div className="admin_panel_article_content-part-icons">
              <div className="admin_panel_article_content-part-modify"><FaPencilAlt onClick={() => {
                console.log('modify');
                onclickPen();
              }}
              />
              </div>
              <div className="admin_panel_article_content-part-delete"><FaTrash onClick={() => {
                console.log('delete');
                onclickTrash();
              }}
              />
              </div>
              <div className="admin_panel_article_content-part-join"><FaInfinity onClick={() => {
                console.log('join');
                onclickJoin();
              }}
              />
              </div>
            </div>
          </div>
        ))}

        <div className="admin_panel_article-content-part">
          <p>Ajouter un article</p>
          <FaPlusCircle />
        </div>
      </div>
    </div>
  );
};

export default AdminArticle;
