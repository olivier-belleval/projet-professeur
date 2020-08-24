import React from 'react';

const KanbanCard = ({ card }) => (
  <div className="kanban-card">

    <div className="kanban-card-title">
      {card.name}
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
