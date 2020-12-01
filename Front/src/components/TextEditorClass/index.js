/**
 * import modules
 */
import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

/**
 * import locals
 */
import './style.scss';

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

TextEditorClass.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classEdited: PropTypes.object.isRequired,
  send: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  handleClassSubmit: PropTypes.func.isRequired,
  cancelEditingClass: PropTypes.func.isRequired,
  handleClassEdit: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default TextEditorClass;
