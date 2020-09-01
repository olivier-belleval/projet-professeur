import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './style.scss';
import 'draft-js/dist/Draft.css';

const TextEditorClass = ({
  changeField,
  username,
  password,
  description,
  handleClassSubmit,
  send,
  editing,
  classEdited,
  cancelEditingClass,
  handleClassEdit,
  closeMenu,
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

  const handleEdition = (evt) => {
    evt.preventDefault();
    handleClassEdit();
  };

  return (
    <div className="text-editor-class" onClick={closeMenu}>
      <form onSubmit={editing ? handleEdition : handleSubmit}>
        <input
          name="username"
          placeholder="Nom de la classe"
          onChange={handleInputChange}
          className="input-title"
          defaultValue={editing ? classEdited.class_username : username}
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
          placeholder="Description de la classe..."
          onChange={handleInputChange}
          className="input-content"
          defaultValue={editing ? classEdited.class_description : description}
        />
        <button type="button" className="text-editor-class-button-cancel" onClick={cancelEditingClass}>
          <Link to="/admin/comptes">Annuler</Link>
        </button>
        <button type="submit" className="text-editor-class-button">
          Let's go baby !
        </button>
        {send && <Redirect to="/admin/comptes" />}
      </form>
    </div>
  );
};

export default TextEditorClass;
