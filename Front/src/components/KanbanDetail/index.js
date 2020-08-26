import React from 'react';
import './style.scss';
import KanbanList from './KanbanList';

const KanbanDetail = ({
  kanban,
  onOpenClick,
  modalOpen
}) => {
  const { lists } = kanban;
  console.log(modalOpen)
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
          {lists.map((list) => <KanbanList key={list.id} list={list} onOpenClick={onOpenClick}/>)}

        </div>
        {/* {modalOpen && (<CardModal/>)} */}
      </main>
    </div>
  );
};

const CardModal = () => (
  <div className="card-modal">
    Coucou
  </div>
)

export default KanbanDetail;
