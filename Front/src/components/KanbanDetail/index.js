import React from 'react';
import './style.scss';
import KanbanList from './KanbanList';

const KanbanDetail = ({
  kanban
}) => {
  console.log('get stüpid -bülow');
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
      <KanbanList {...kanban}/>
      </div>
        
      </main>
    </div>
  );
};

export default KanbanDetail;
