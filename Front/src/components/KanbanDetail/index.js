import React, { useEffect } from 'react';
import './style.scss';
import { MdClose } from 'react-icons/md';
import { AiFillPlusSquare } from 'react-icons/ai';
import KanbanList from './KanbanList';

const KanbanDetail = ({
  // Datas
  kanban,
  modalOpen,
  listModalOpen,
  newCardOrder,
  newCardContent,
  editMode,
  getKanbanDetail,
  kanban_detail,
  datas,
  newCardColor,
  newListOrder,
  newListTitle,

  // Funtions
  deleteCard,
  getListId,
  openListModal,
  handleListSubmit,
  deleteList,
  handleCardSubmit,
  handleEditMode,
  changeField,
  onOpenClick,
}) => {
  useEffect(() => {
    getKanbanDetail();
    console.log("Console log du chargement de Kanban Detail")
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (listModalOpen) {
      handleListSubmit();
    }
    else if (modalOpen) {
      handleCardSubmit();
    }
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
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
            <AiFillPlusSquare onClick={openListModal} />
            {listModalOpen && (
              <ListModal
                openListModal={openListModal}
                changeField={handleInputChange}
                handleSubmit={handleSubmit}
                newListdOrder={newListOrder}
                newListTitle={newListTitle}
              />
            )}
          </div>
        </div>

      </header>

      { datas && kanban_detail && (
        <main>
            <div className="kanban-detail-grid">
            {kanban_detail['0'].lists.map((list) => <KanbanList key={list.id} list={list} onOpenClick={onOpenClick} deleteCard={deleteCard} getListId={getListId} deleteList={deleteList} />)}
          </div>

          {modalOpen && (
            <CardModal
              onClick={onOpenClick}
              changeField={handleInputChange}
              newCardOrder={newCardOrder}
              newCardContent={newCardContent}
              newCardColor={newCardColor}
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
}) => (
  <div className="modal">
    <div className="modal-close-button">
      <MdClose onClick={onClick} />
    </div>
    <form onSubmit={handleSubmit}>
      <h3> Ajouter une carte</h3>
      <input
        type="number"
        name="newCardOrder"
        value={newCardOrder}
        placeholder="Position de la carte"
        className="modal-input"
        onChange={changeField}
      />
      <textarea
        type="text"
        name="newCardContent"
        value={newCardContent}
        placeholder="Description"
        className="modal-textarea"
        onChange={changeField}
      />
      <label htmlFor="newCardColor"> 
        Couleur de ma carte
      </label>
      <input
        type="color"
        name="newCardColor"
        defaultValue="#fff"
        onChange={changeField}
      />
      <button type="submit"> Ajouter</button>
    </form>

  </div>
);

const ListModal = ({
  openListModal,
  handleSubmit,
  newListOrder,
  newListTitle,
  changeField,
}) => (
  <div className="modal">
    <div className="modal-close-button">
      <MdClose onClick={openListModal} />
    </div>
    <form onSubmit={handleSubmit}>
      <h3> Ajouter une liste</h3>
      <input
        type="number"
        name="newListOrder"
        value={newListOrder}
        placeholder="Position de la liste"
        className="modal-input"
        onChange={changeField}
      />
      <input
        type="text"
        name="newListTitle"
        value={newListTitle}
        placeholder="Nom de la liste"
        className="modal-input"
        onChange={changeField}
      />
      <button type="submit"> Ajouter</button>
    </form>

  </div>
);

export default KanbanDetail;
