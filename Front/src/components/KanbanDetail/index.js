import React, { useEffect } from 'react';
import './style.scss';
import { MdClose, MdMoreVert } from 'react-icons/md';
import { AiFillPlusSquare } from 'react-icons/ai';
import KanbanList from './KanbanList';
import { toggleModalListEdition } from '../../store/action/kanban-editor-action';

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
  editionModalList,
  listDetails,
  cardDetails,
  teacher,

  // Funtions
  deleteCard,
  getListId,
  openListModal,
  handleListSubmit,
  closeMenu,
  deleteList,
  handleCardSubmit,
  handleEditMode,
  changeField,
  onOpenClick,
  toggleListEdit,
  getListDetails,
  getCardDetails,
  submitListEdition,
  submitCardEdition,
  toggleCardEdit,
  editionModalCard,
}) => {

  useEffect(() => {
    getKanbanDetail();
    console.log("Ma première action à l'ouverture du composant")
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (listModalOpen) {
      handleListSubmit();
    }
    else if (modalOpen) {
      handleCardSubmit();
    }
    else if (editionModalList) {
      submitListEdition();
    }
    else if (editionModalCard) {
      submitCardEdition();
    }
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };

  if(kanban_detail['0']){
    if (kanban_detail['0'].lists) {
    kanban_detail['0'].lists.sort((a, b) => {
      if (a.cards) {
        a.cards.sort((c, d) => (c.order - d.order));
      }
      return a.order - b.order;
    });
  }
  }
  

  return (
    <div className="kanban-detail" onClick={closeMenu}>
      <header className="kanban-detail-header">
        <div className="kanban-detail-head">
          <div className="kanban-detail-head-text-content">
            <h1 className="kanban-detail-head--title">
              {kanban.title}

            </h1>
            <span className="kanban-detail-head--subtitle">
              {kanban.description}
            </span>
          </div>

          {teacher && (
            <div className="kanban-detail-adding-button">
              <AiFillPlusSquare onClick={openListModal} />
              { listModalOpen
            && (
            <ListModal
              openListModal={openListModal}
              changeField={handleInputChange}
              handleSubmit={handleSubmit}
              newListdOrder={newListOrder}
              newListTitle={newListTitle}
              editionModalList={editionModalList}
              toggleListEdit={toggleListEdit}
            />
            )}

              { editionModalList
            && (
            <ListModal
              openListModal={openListModal}
              changeField={handleInputChange}
              handleSubmit={handleSubmit}
              newListdOrder={newListOrder}
              newListTitle={newListTitle}
              editionModalList={editionModalList}
              toggleListEdit={toggleListEdit}
              listDetails={listDetails}
            />
            )}

            </div>
          )}

        </div>

      </header>

      { datas && kanban_detail['0'] && kanban_detail['0'].lists && (
        <main>
          <div className="kanban-detail-grid" style={{backgroundColor: kanban_detail['0'].background}}>

            {kanban_detail['0'].lists.map((list) => (
              <KanbanList
                key={list.id}
                list={list}
                onOpenClick={onOpenClick}
                deleteCard={deleteCard}
                getListId={getListId}
                deleteList={deleteList}
                editMode={editMode}
                handleEditMode={handleEditMode}
                toggleListEdit={toggleListEdit}
                getListDetails={getListDetails}
                getCardDetails={getCardDetails}
                toggleCardEdit={toggleCardEdit}
                teacher={teacher}
              />
            ))}
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

          {editionModalCard && (
            <CardModal
              onClick={onOpenClick}
              changeField={handleInputChange}
              newCardOrder={newCardOrder}
              newCardContent={newCardContent}
              newCardColor={newCardColor}
              handleSubmit={handleSubmit}
              editionModalCard={editionModalCard}
              toggleCardEdit={toggleCardEdit}
              cardDetails={cardDetails}
            />
          )}

        </main>
      )}
    </div>
  );
};

const CardModal = ({
  onClick,
  changeField,
  newCardOrder,
  newCardContent,
  newCardColor,
  handleSubmit,
  editionModalCard,
  toggleCardEdit,
  cardDetails,
}) => (
  <div className="modal">
    <div className="modal-close-button">
      <MdClose onClick={editionModalCard ? toggleCardEdit : onClick} />
    </div>
    <form onSubmit={handleSubmit}>
      <h3>{editionModalCard ? 'Editer ma carte' : 'Ajouter une carte'}</h3>
      <textarea
        type="text"
        name="newCardContent"
        defaultValue={editionModalCard ? cardDetails.description : newCardContent}
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
        defaultValue={editionModalCard ? cardDetails.color : '#4c3e53'}
        onChange={changeField}
      />
      <button type="submit"> Ajouter</button>
    </form>

  </div>
);

const ListModal = ({
  openListModal,
  handleSubmit,
  newListTitle,
  changeField,
  editionModalList,
  toggleListEdit,
  listDetails,

}) => (
  <div className="modal">
    <div className="modal-close-button">
      <MdClose onClick={editionModalList ? toggleListEdit : openListModal} />
    </div>
    <form onSubmit={handleSubmit}>
      <h3>{editionModalList ? 'Modifier une liste' : 'Ajouter une liste'}</h3>
      <input
        type="text"
        name="newListTitle"
        defaultValue={editionModalList ? listDetails.title : newListTitle}
        placeholder="Nom de la liste"
        className="modal-input"
        onChange={changeField}
      />
      <button type="submit"> Ajouter</button>
    </form>

  </div>
);

export default KanbanDetail;
