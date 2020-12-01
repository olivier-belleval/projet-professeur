/**
 * import modules
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  FaPencilAlt,
  FaTrash,
  FaPlusCircle,
} from 'react-icons/fa';

import { MdClose } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';

/**
 * import locals
 */
import './style.scss';

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

        <div className="admin_panel_article-content">
          {list.map((article) => (
            <div className="admin_panel_article-content-part" key={article.article_id}>
              <div className="admin_panel_article-content-part-article">{article.article_title}</div>

              <div className="admin_panel_article_content-part-class">

                {article.class_username && article.class_username.map((classesObject) => (
                  <div className="classusername-container">
                    <div className="classusername-tag" key={classesObject}> {classesObject}

                    </div>
                    <div
                      className="class-remove"
                      onClick={() => {
                        removeClassFromArticle(article.article_id);
                        removedClassFromArticle(classesObject);
                      }}
                    >
                      x
                    </div>
                  </div>
                ))}

              </div>
              string
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
            <p>Ajouter un article</p>string
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

AdminArticle.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    article_id: PropTypes.number.isRequired,
    article_title: PropTypes.string.isRequired,
    class_username: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  deleteArticle: PropTypes.func.isRequired,
  getArticles: PropTypes.func.isRequired,
  editArticle: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  classAdded: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  getClasses: PropTypes.func.isRequired,
  onOpenClick: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  handleSubmitAssociation: PropTypes.func.isRequired,
  removeClassFromArticle: PropTypes.func.isRequired,
  removedClassFromArticle: PropTypes.func.isRequired,
};

export const AssociationModale = ({
  classes,
  classAdded,
  handleInputChange,
  onOpenClick,
  handleSubmit,
}) => (
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
        <button type="button" onClick={onOpenClick}>Annuler</button> <button type="button">Associer </button>
      </div>
    </form>

  </div>
);

AssociationModale.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.shape({
    class_username: PropTypes.string.isRequired,
    class_id: PropTypes.number.isRequired,
  })).isRequired,
  classAdded: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  onOpenClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AdminArticle;
