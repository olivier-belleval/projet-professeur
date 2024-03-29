import React from 'react';
import PropTypes from 'prop-types';

// React-Icons
import { AiFillPlusSquare, AiOutlinePlus } from 'react-icons/ai';
import { MdClose, MdMoreVert } from 'react-icons/md';

// Import Component
import KanbanCard from './KanbanCard';

const KanbanList = ({
  // datas
  list,
  // functions
  onOpenClick,
  deleteCard,
  getListId,
  deleteList,
  toggleListEdit,
  getListDetails,
  getCardDetails,
  toggleCardEdit,
  teacher,
}) => (
  <div className="kanban-list-container">
    <div
      className="kanban-list"
      key={list.id}
      onClick={() => {
        getListId(list.id);
      }}
    >
      <div className="kanban-list-title">
        <span>{list.name}</span>
        {teacher && (
          <span>
            <span>
              <MdMoreVert onClick={() => {
                getListDetails({
                  title: list.name,
                  order: list.order,
                });
                toggleListEdit(list.id);
              }}
              />

            </span>

            <span>
              <MdClose onClick={deleteList} />
            </span>
          </span>
        )}

      </div>

      <div className="kanban-list-content">
        {list.cards && list.cards.map((card) => (
          <KanbanCard
            key={card.id}
            card={card}
            deleteCard={deleteCard}
            getCardDetails={getCardDetails}
            toggleCardEdit={toggleCardEdit}
            teacher={teacher}
          />
        ))}

      </div>
      {teacher
      && (
        <div className="adding-card">
          <AiOutlinePlus onClick={() => {
            onOpenClick(list.id);
          }}
          />
        </div>
      )}
    </div>
  </div>
);

KanbanList.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    cards: PropTypes.array,
  }),
  onOpenClick: PropTypes.func,
  deleteCard: PropTypes.func,
  deleteList: PropTypes.func,
  getListId: PropTypes.func,
  toggleCardEdit: PropTypes.func,
  getCardDetails: PropTypes.func,
  getListDetails: PropTypes.func,
  toggleListEdit: PropTypes.func,
};
export default KanbanList;
