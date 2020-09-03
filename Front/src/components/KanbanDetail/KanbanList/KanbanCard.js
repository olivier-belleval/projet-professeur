import React from 'react';
import { MdClose, MdMoreVert } from 'react-icons/md';

const KanbanCard = ({
  card,
  deleteCard,
  getCardDetails,
  toggleCardEdit
}) => (
  <div className="kanban-card" style={{backgroundColor:card.color}}>

    <div className="kanban-card-title">
      {card.name}

      <MdMoreVert onClick={() => (
        getCardDetails({
          description: card.description,
          order: card.order,
          color: card.color,
        }),
        toggleCardEdit(card.id)
      )}
      />
      <MdClose onClick={() => {
        deleteCard(card.id);
      }}
      />
    </div>
    {card.tags && card.tags.map((tag) => <Tag key={tag.id} tag={tag} />)}
    <div className="kanban-card-content">
      {card.description}

    </div>
  </div>
);

const Tag = ({ tag }) => (
  <span className="tag">
    {tag.name}
  </span>
);

export default KanbanCard;
