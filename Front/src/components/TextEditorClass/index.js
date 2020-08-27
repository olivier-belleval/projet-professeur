import React from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';
import 'draft-js/dist/Draft.css';

const TextEditorClass = ({
  changeField, username, password, description, handleClassSubmit, send,
}) => {
  console.log('text edit');
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleClassSubmit();
  };

  return (
    <div className="text-editor-class">
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={username}
          placeholder="Nom de la classe"
          onChange={handleInputChange}
          className="input-title"
        />
        <input
          name="password"
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={handleInputChange}
          className="input-title"
        />
        <textarea
          name="description"
          value={description}
          placeholder="Description de la classe..."
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
