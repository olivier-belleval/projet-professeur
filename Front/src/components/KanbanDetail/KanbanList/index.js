import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanList = ({ list }) => {
  console.log(list)
  return(
  <div>
      <div className="kanban-list" key={list.id}>
        <div className="kanban-list-title">
          {list.name}
        </div>
        <div className="kanban-list-content">
          {list.cards && list.cards.map((card) => <KanbanCard key={card.id} card={card} />)}

        </div>
      </div>;
  </div>
);}

export default KanbanList;
