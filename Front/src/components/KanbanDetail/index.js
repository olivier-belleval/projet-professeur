import React from 'react';
import './style.scss';
import KanbanList from './KanbanList';
import { MdClose } from "react-icons/md";

const KanbanDetail = ({
  kanban,
  onOpenClick,
  modalOpen,
  changeFieldCard,
  newCardTitle,
  newCardContent
}) => {
  const { lists } = kanban;
  console.log(modalOpen)
  return (
    <div className="kanban-detail">
      <header>
        <div className="kanban-detail-head">
          <h1 className="kanban-detail-head--title">
            {kanban.title}
          </h1>
          <span className="kanban-detail-head--subtitle">
            {kanban.description}
          </span>
        </div>
      </header>
      <main>
        <div className="kanban-detail-grid">
          {lists.map((list) => <KanbanList key={list.id} list={list} onOpenClick={onOpenClick}/>)}
        </div>
        {modalOpen && (<CardModal onClick={onOpenClick} changeField={changeFieldCard} newCardTitle={newCardTitle} newCardContent={newCardContent}/>)} 
      </main>
    </div>
  );
};

const CardModal = ({onClick, changeField, newCardTitle, newCardContent}) => {
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };

  
  return(
  <div className="card-modal">
  <div className="card-modal-close-button">
    <MdClose onClick={onClick}/>
  </div>
    <form>
      <h3> Ajouter une carte</h3>
        <input 
          type="text"
          name="newCardTitle"
          value={newCardTitle}
          placeholder="Titre"
          className="card-modal-input"
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="newCardContent"
          value={newCardContent}
          placeholder="Description"
          className="card-modal-textarea"
          onChange={handleInputChange}
        /> 
        <button type="submit"> Ajouter</button>
    </form>
        
  </div>
)}

export default KanbanDetail;
