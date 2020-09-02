import React from 'react';
import { MdClose } from 'react-icons/md';



const KanbanCard = ({ card, deleteCard }) => (
  <div className="kanban-card">

    <div className="kanban-card-title">
      {card.name} <MdClose onClick={() =>{deleteCard(card.id)}}/>
    </div>
    {card.tags && card.tags.map((tag) => <Tag key={tag.id} tag={tag} />)}
    <div className="kanban-card-content">
      {card.description}

    </div>
  </div>
);

const Tag = ({tag}) => (
  <span className="tag">
    {tag.name}
  </span>
);

export default KanbanCard;
