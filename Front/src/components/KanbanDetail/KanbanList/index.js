import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanList = ({ kanban }) => (
  <div>
    {kanban.map((list) => {
      <div className="kanban-list" key={list.list_id}>
        <div className="kanban-list-title">
          {list.list_name}
        </div>
        <div className="kanban-list-content">
          {list.map((card) => <KanbanCard key={card.id} {...card} />)}

        </div>
      </div>;
    })}
  </div>
);

export default KanbanList;
