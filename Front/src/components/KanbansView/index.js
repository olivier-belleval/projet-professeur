import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const KanbansView = ({ kanbans }) => {
  console.log('kanban view');
  return (
    <div className="kanbans-view">
      <div className="kanbans-view-head">
        <h2 className="kanbans-view-head-title">
          Mes Tableaux
        </h2>
        <span className="kanbans-view-head-subtitle">
          Nom de la classe
        </span>
      </div>
      {kanbans.map((kanban) => (
        <Link to="/aremplir">
          <div className="kanbans-view-list">
            <div className="kanban">
              <h3 className="kanban-title">
                {kanban.title}
              </h3>
              <span className="kanban-subtitle">
                {kanban.description}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default KanbansView;
