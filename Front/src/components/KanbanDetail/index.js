import React from 'react';
import './style.scss';
import KanbanList from './KanbanList';

const KanbanDetail = () => {
  console.log('get stüpid -bülow');
  return (
    <div className="kanban-detail">
      <header>
        <div className="kanban-detail-head">
          <h1 className="kanban-detail-head--title">
            Le nom de mon tableau
          </h1>
          <span className="kanban-detail-head--subtitle">
            Sa decription, son auteur, la météo
          </span>
        </div>
      </header>
      <main>
      <div className="kanban-detail-grid">
      <KanbanList />
      <KanbanList />
      <KanbanList />
      </div>
        
      </main>
    </div>
  );
};

export default KanbanDetail;
