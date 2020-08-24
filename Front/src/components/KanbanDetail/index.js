import React from 'react';
import './style.scss';
import KanbanList from './KanbanList';

const KanbanDetail = ({
  kanban
}) => {
  const { lists } = kanban;
  console.log(lists)
  return (
    <div className="kanban-detail">
      <header>
        <div className="kanban-detail-head">
          <h1 className="kanban-detail-head--title">
            {kanban.title}
          </h1>
          <span className="kanban-detail-head--subtitle">
            {kanban.description}
          </span>
        </div>
      </header>
      <main>
        <div className="kanban-detail-grid">
          {lists.map((list) => <KanbanList key={list.id} list={list}/>)}

        </div>

      </main>
    </div>
  );
};

export default KanbanDetail;
