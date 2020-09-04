import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './style.scss';
import 'draft-js/dist/Draft.css';

const TextEditorKanban = ({
  changeField,
  title,
  description,
  background,
  handleKanbanSubmit,
  send,
  editing,
  kanbanEdited,
  cancelEditingKanban,
  handleKanbanEdit,
  closeMenu,
}) => {
  console.log('text edit');
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleKanbanSubmit();
  };
  const handleEdition = (evt) => {
    evt.preventDefault();
    handleKanbanEdit();
  };

  return (
    <div className="text-editor-kanban" onClick={closeMenu}>
      <form onSubmit={editing ? handleEdition : handleSubmit}>
        <input
          name="title"
          defaultValue={editing ? kanbanEdited.title : title}
          placeholder="Titre du kanban"
          onChange={handleInputChange}
          className="input-title"
        />
        <input
          name="background"
          defaultValue={editing ? kanbanEdited.background : background}
          type="color"
          placeholder="Choisissez votre couleur"
          onChange={handleInputChange}
          className="input-title"
        />
        <textarea
          name="description"
          defaultValue={editing ? kanbanEdited.description : description}
          placeholder="Contenu du Kanban..."
          onChange={handleInputChange}
          className="input-content"
        />
        <button type="button" className="text-editor-kanban-button-cancel" onClick={cancelEditingKanban}>
          <Link to="/admin/Kanban">Annuler</Link>
        </button>
        <button type="submit" className="text-editor-kanban-button">
          Let's go baby !
        </button>
        {send && <Redirect to="/admin/kanban" />}
      </form>
    </div>
  );
};

export default TextEditorKanban;
