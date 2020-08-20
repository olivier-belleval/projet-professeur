import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanList = () => (
  <div className="kanban-list">

    <div className="kanban-list-title">
      Séance N°666
    </div>
    <div className="kanban-list-content">
      <KanbanCard />
      <KanbanCard />
      <KanbanCard />
      <KanbanCard />

    </div>
  </div>
);


export default KanbanList;
