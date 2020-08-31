import React from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';
import 'draft-js/dist/Draft.css';

const TextEditorKanban = ({
  changeField, title, description, background, handleKanbanSubmit, send,
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

  return (
    <div className="text-editor-kanban">
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={title}
          placeholder="Titre du kanban"
          onChange={handleInputChange}
          className="input-title"
        />
        <input
          name="background"
          value={background}
          type="color"
          placeholder="Choisissez votre couleur"
          onChange={handleInputChange}
          className="input-title"
        />
        <textarea
          name="description"
          value={description}
          placeholder="Contenu du Kanban..."
          onChange={handleInputChange}
          className="input-content"
        />

        <button type="submit" className="text-editor-kanban-button">
          Let's go baby !
        </button>
        {send && <Redirect to="/admin/kanban" />}
      </form>
    </div>
  );
};

export default TextEditorKanban;
