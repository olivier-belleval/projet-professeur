/**
 * import modules
 */
import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { AiFillPlusSquare } from 'react-icons/ai';
import PropTypes from 'prop-types';

/**
 * import components
 */
import KanbanList from './KanbanList';

/**
 * import locals
 */
import './style.scss';

const KanbanDetail = ({
  // Datas
  kanban,
  modalOpen,
  listModalOpen,
  newCardContent,
  editMode,
  kanban_detail,
  datas,
  newListTitle,
  listDetails,
  cardDetails,
  teacher,

  // Funtions
  editionModalList,
  getKanbanDetail,
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

  if (kanban_detail && kanban_detail['0']) {
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
    <div className="container">
      <div className={modalOpen ? 'kanban-detail blur' : editionModalCard ? 'kanban-detail blur' : listModalOpen ? 'kanban-detail blur' : editionModalList ? 'kanban-detail blur' : 'kanban-detail'} onClick={closeMenu}>
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
            </div>
            )}

          </div>

        </header>

        { datas && kanban_detail['0'] && kanban_detail['0'].lists && (
        <main>
          <div className="kanban-detail-grid" style={{ backgroundColor: kanban_detail['0'].background }}>

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

        </main>
        )}
      </div>
      {modalOpen && (
      <CardModal
        onClick={onOpenClick}
        changeField={handleInputChange}
        newCardContent={newCardContent}
        handleSubmit={handleSubmit}
      />
      )}

      {editionModalCard && (
      <CardModal
        onClick={onOpenClick}
        changeField={handleInputChange}
        newCardContent={newCardContent}
        handleSubmit={handleSubmit}
        editionModalCard={editionModalCard}
        toggleCardEdit={toggleCardEdit}
        cardDetails={cardDetails}
      />
      )}
      { listModalOpen
            && (
            <ListModal
              openListModal={openListModal}
              changeField={handleInputChange}
              handleSubmit={handleSubmit}
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
              newListTitle={newListTitle}
              editionModalList={editionModalList}
              toggleListEdit={toggleListEdit}
              listDetails={listDetails}
            />
            )}
    </div>
  );
};

KanbanDetail.propTypes = {
  kanban: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  modalOpen: PropTypes.bool.isRequired,
  listModalOpen: PropTypes.bool.isRequired,
  newCardContent: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  kanban_detail: PropTypes.arrayOf(PropTypes.shape({
    lists: PropTypes.array.isRequired,
    background: PropTypes.string.isRequired,
  })).isRequired,
  datas: PropTypes.bool.isRequired,
  newCardColor: PropTypes.string.isRequired,
  newListTitle: PropTypes.string.isRequired,
  listDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  cardDetails: PropTypes.shape({
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  teacher: PropTypes.bool.isRequired,

  editionModalList: PropTypes.bool.isRequired,
  getKanbanDetail: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  getListId: PropTypes.func.isRequired,
  openListModal: PropTypes.func.isRequired,
  handleListSubmit: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  handleCardSubmit: PropTypes.func.isRequired,
  handleEditMode: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  onOpenClick: PropTypes.func.isRequired,
  toggleListEdit: PropTypes.func.isRequired,
  getListDetails: PropTypes.func.isRequired,
  getCardDetails: PropTypes.func.isRequired,
  submitListEdition: PropTypes.func.isRequired,
  submitCardEdition: PropTypes.func.isRequired,
  toggleCardEdit: PropTypes.func.isRequired,
  editionModalCard: PropTypes.bool.isRequired,
};

const CardModal = ({
  onClick,
  changeField,
  newCardContent,
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
        defaultValue={editionModalCard ? cardDetails.color : '#2e2433'}
        onChange={changeField}
      />
      <button type="submit"> Ajouter</button>
    </form>

  </div>
);

CardModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  newCardContent: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  editionModalCard: PropTypes.bool.isRequired,
  toggleCardEdit: PropTypes.func.isRequired,
  cardDetails: PropTypes.shape({
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

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

ListModal.propTypes = {
  openListModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newListTitle: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  editionModalList: PropTypes.bool.isRequired,
  toggleListEdit: PropTypes.func.isRequired,
  listDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default KanbanDetail;
