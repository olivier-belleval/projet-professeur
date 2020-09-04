import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  FaPencilAlt,
  FaTrash,
  FaPlusCircle,
  FaInfinity,
} from 'react-icons/fa';

import { MdClose } from 'react-icons/md';
import './style.scss';
import { HiOutlineUserGroup } from 'react-icons/hi';

const AdminArticle = ({
  list,
  deleteArticle,
  getArticles,
  editArticle,
  closeMenu,
  classes,
  classAdded,
  changeField,
  getClasses,
  onOpenClick,
  modalOpen,
  handleSubmitAssociation,
  removeClassFromArticle,
  removedClassFromArticle,
  message,
}) => {
  useEffect(() => {
    getArticles();
    getClasses();
  }, []);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSubmitAssociation();
  };

  return (

    <div className="container">
      <div className={modalOpen ? 'admin_panel_article blur' : 'admin_panel_article'} onClick={closeMenu}>
        <h1 className="admin_panel_article-title"> Gestion des articles </h1>
        {message && (
        <div className="text-editor-class-message">
          {message}
        </div>
      )}
        <div className="admin_panel_article-content">
          {list.map((article) => (
            <div className="admin_panel_article-content-part" key={article.article_id}>
              <div className="admin_panel_article-content-part-article">{article.article_title}</div>

              <div className="admin_panel_article_content-part-class">

                {article.class_username && article.class_username.map((classes) => (
                  <div className="classusername-container">
                    <div className="classusername-tag" key={classes}> {classes}

                    </div>
                    <div
                      className="class-remove"
                      onClick={() => {
                        removeClassFromArticle(article.article_id);
                        removedClassFromArticle(classes);
                      }}
                    >
                      x
                    </div>
                  </div>
                ))}

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
                <div className="admin_panel_article_content-part-join">
                  <HiOutlineUserGroup onClick={() => (
                    onOpenClick(article.article_id))}
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
      {modalOpen && (
      <AssociationModale
        classes={classes}
        classAdded={classAdded}
        handleInputChange={handleInputChange}
        onOpenClick={onOpenClick}
        handleSubmit={handleSubmit}
      />
      )}
    </div>
  );
};

export const AssociationModale = ({
  classes,
  classAdded,
  handleInputChange,
  onOpenClick,
  handleSubmit,
}) => {
  console.log(classes);
  return (
    <div className="association-modale">
      <div className="association-modale-close">
        <MdClose onClick={onOpenClick} />
      </div>
      <form className="association-modale-form" onSubmit={handleSubmit}>
        <h3> Associer une classe à l'article </h3>
        <select
          className="association-modale-select"
          name="classAdded"
          value={classAdded}
          onChange={handleInputChange}
        >
          <option>Sélectionner une classe</option>
          {classes.map((item) => (
            <option value={item.class_username} key={item.class_id}>{item.class_username}</option>
          ))}
        </select>
        <div>
          <button type="button" onClick={onOpenClick}>Annuler</button> <button>Associer </button>
        </div>
      </form>

    </div>
  );
};

export default AdminArticle;
