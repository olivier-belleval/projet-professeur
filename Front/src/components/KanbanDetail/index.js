import React from 'react';
import './style.scss';
import KanbanList from './KanbanList';

const KanbanDetail = ({
  kanban_detail,
}) => {
  console.log('get stüpid -bülow');
  return (
    <div className="kanban-detail">
      <header>
        <div className="kanban-detail-head">
          <h1 className="kanban-detail-head--title">
            {kanban_detail.kanban_title}
          </h1>
          <span className="kanban-detail-head--subtitle">
            {kanban_detail.kanban_description}
          </span>
        </div>
      </header>
      <main>
        <div className="kanban-detail-grid">
          {kanban_detail.map((kanban) => <KanbanList key={kanban.id} {...kanban}/>)}

        </div>

      </main>
    </div>
  );
};

export default KanbanDetail;
