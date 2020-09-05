import React, { useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { slugifyTitle } from '../../utils';

const KanbansView = ({ list, getKanbans, getKanban, closeMenu, username }) => {
  useEffect(() => {
    getKanbans();
  }, []);

  return (
    <div className="kanbans-view" onClick={closeMenu}>
      <div className="kanbans-view-head">
        <h2 className="kanbans-view-head-title">
          Mes Tableaux
        
        <hr></hr>
        
          {username}
        </h2>
      </div>
      {list.map((kanban) => (
        <Link to={`kanban/${slugifyTitle(kanban.title)}`} key={kanban.title}>
          <div className="kanbans-view-list" onMouseEnter={()=>{getKanban(kanban.id)}}>
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
