import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanList = ({kanban}) => (
  <div className="kanban-list">

    <div className="kanban-list-title">
      {kanban.list.name}
    </div>
    <div className="kanban-list-content">
    {kanban.list.map((card)=> <KanbanCard key={card.id} {...card}/>)}

    </div>
  </div>
);


export default KanbanList;
