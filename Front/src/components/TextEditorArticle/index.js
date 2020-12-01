/**
 * import modules
 */
import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * import locals
 */
import './style.scss';

const TextEditorArticle = ({
  changeField,
  title,
  content,
  handleArticleSubmit,
  send,
  editing,
  articleEdited,
  cancelEditingArticle,
  handleArticleEdit,
  closeMenu,

}) => {
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleArticleSubmit();
  };
  const handleEdition = (evt) => {
    evt.preventDefault();
    handleArticleEdit();
  };

  return (
    <div className="text-editor-article" onClick={closeMenu}>
      <form onSubmit={editing ? handleEdition : handleSubmit}>
        <input
          name="title"
          placeholder="Titre"
          onChange={handleInputChange}
          className="input-title"
          defaultValue={editing ? articleEdited.article_title : title}
        />
        <textarea
          name="content"
          defaultValue={editing ? articleEdited.article_content : content}
          onChange={handleInputChange}
          className="input-content"
        />
        <button type="button" className="text-editor-article-button-cancel" onClick={cancelEditingArticle}>
          <Link to="/admin/articles">Annuler</Link>
        </button>
        <button type="submit" className="text-editor-article-button">
          Envoyer
        </button>
        {send && <Redirect to="/admin/articles" />}
      </form>
    </div>
  );
};

TextEditorArticle.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleArticleSubmit: PropTypes.func.isRequired,
  send: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  articleEdited: PropTypes.object.isRequired,
  cancelEditingArticle: PropTypes.func.isRequired,
  handleArticleEdit: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default TextEditorArticle;
