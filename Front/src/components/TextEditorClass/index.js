import React from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';
import 'draft-js/dist/Draft.css';

const TextEditorClass = ({
  changeField, title, content, handleArticleSubmit, send,
}) => {
  console.log('text edit');
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleArticleSubmit();
  };

  return (
    <div className="text-editor-class">
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={title}
          placeholder="Titre"
          onChange={handleInputChange}
          className="input-title"
        />
        <textarea
          name="content"
          value={content}
          placeholder="Description de la casse..."
          onChange={handleInputChange}
          className="input-content"
        />
        <button type="submit" className="text-editor-class-button">
          Let's go baby !
        </button>
        {send && <Redirect to="/admin/comptes" />}
      </form>
    </div>
  );
};

export default TextEditorClass;
