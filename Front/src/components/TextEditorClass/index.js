import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './style.scss';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';

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
  message,
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

  const [showedPassword, setShowedPassword] = useState(false);

  return (
    <div className="text-editor-class" onClick={closeMenu}>
      <form onSubmit={editing ? handleEdition : handleSubmit}>
        {message && (
        <div className="text-editor-class-message">
          {message}
        </div>
        )}
        <input
          name="username"
          placeholder="Nom de la classe"
          onChange={handleInputChange}
          className="input-title"
          defaultValue={editing ? classEdited.class_username : username}
        />
        <span className="input-password">
          <input
            name="password"
            type={showedPassword ? 'text' : 'password'}
            value={password}
            placeholder="Mot de passe"
            onChange={handleInputChange}
            className="input-password"
          />
          <span onClick={() => {
            setShowedPassword(!showedPassword);
          }}
          >
            {showedPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
          </span>
        </span>
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
          Ajouter
        </button>
        {send && <Redirect to="/admin/comptes" />}
      </form>
    </div>
  );
};

export default TextEditorClass;
