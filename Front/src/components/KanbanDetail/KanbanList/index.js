import React from 'react';
import PropTypes from 'prop-types';

// React-Icons
import { AiFillPlusSquare } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

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
}) => (
  <div style={{ width: '100%' }}>
    <div
      className="kanban-list"
      key={list.id}
      onClick={() => {
        console.log("Kanban Detail List Component. L'id de ma liste est : ", list.id)
        getListId(list.id);
      }}
    >
      <div className="kanban-list-title">
        <span>{list.name}</span>

        <span><AiFillPlusSquare onClick={() => {
          onOpenClick(list.id);
        }}
        />
        </span>

        <span>
          <MdClose onClick={deleteList} />
        </span>

      </div>
      <div className="kanban-list-content">
        {list.cards && list.cards.map((card) => (
          <KanbanCard
            key={card.id}
            card={card}
            deleteCard={deleteCard}
          />
        ))}

      </div>
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

};
export default KanbanList;
