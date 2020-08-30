import React, { useEffect } from 'react';
import './style.scss';
import { MdClose } from 'react-icons/md';
import { AiFillPlusSquare } from 'react-icons/ai';
import KanbanList from './KanbanList';

const KanbanDetail = ({
  kanban,
  onOpenClick,
  modalOpen,
  changeFieldCard,
  newCardOrder,
  newCardContent,
  handleCardSubmit,
  handleEditMode,
  editMode,
  getKanbanDetail,
  kanban_detail,
  datas,
  deleteCard,
  getListId
}) => {

  useEffect(() => {
    getKanbanDetail();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCardSubmit();
  };

  return (
    <div className="kanban-detail">
      <header className="kanban-detail-header">
        <div className="kanban-detail-head">
          <div><h1 className="kanban-detail-head--title" onClick={handleEditMode}>
            {editMode
              ? (
                <div><input type="text" defaultValue={kanban.title} />
                  <MdClose onClick={handleEditMode} />
                </div>
              ) : kanban.title}

          </h1>
            <span className="kanban-detail-head--subtitle">
              {kanban.description}
            </span>
          </div>
          <div className="kanban-detail-adding-button">
            <AiFillPlusSquare />
          </div>
        </div>

      </header>
      { datas && (
      <main>
        <div className="kanban-detail-grid">
          {kanban_detail['0'].lists.map((list) => <KanbanList key={list.id} list={list} onOpenClick={onOpenClick} deleteCard={deleteCard} getListId={getListId}/>)}
        </div>
        {modalOpen && (
        <CardModal
          onClick={onOpenClick}
          changeField={changeFieldCard}
          newCardOrder={newCardOrder}
          newCardContent={newCardContent}
          handleSubmit={handleSubmit}
        />
        )}
      </main>
      )}
    </div>
  );
};

const CardModal = ({
  onClick, changeField, newCardOrder, newCardContent, handleSubmit,
}) => {
  // to put values into the state in the right field thanks to the name
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };

  return (
    <div className="card-modal">
      <div className="card-modal-close-button">
        <MdClose onClick={onClick} />
      </div>
      <form onSubmit={handleSubmit}>
        <h3> Ajouter une carte</h3>
        <input
          type="number"
          name="newCardOrder"
          value={newCardOrder}
          placeholder="Position de la carte"
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
  );
};

export default KanbanDetail;
