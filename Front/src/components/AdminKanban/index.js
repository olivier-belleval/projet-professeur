import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  FaPencilAlt, FaTrash, FaPlusCircle, FaInfinity,
} from 'react-icons/fa';
import './style.scss';

const AdminKanban = ({
  list,
  editKanban,
  deleteKanban,
  onclickJoin,
  getKanbans,
  closeMenu,
}) => {
  console.log(list);
  useEffect(() => {
    getKanbans();
  }, []);
  return (
    <div className="admin_panel_kanban" onClick={closeMenu}>
      <h1 className="admin_panel_kanban-title"> Espace administrateur - gestion des articles </h1>
      <div className="admin_panel_kanban-content">
        {list.map((tableau) => (
          <div className="admin_panel_kanban-content-part" key={tableau.id}>
            <div className="admin_panel_kanban-content-part-tableau">{tableau.title}</div>
            <div className="admin_panel_kanban_content-part-class">
              <p>{tableau.description}</p>
            </div>
            <div className="admin_panel_kanban_content-part-icons">
              <div className="admin_panel_class_content-part-modify">
                <Link to={`/admin/edit/kanban/${tableau.id}`} key={tableau.id}>
                  <FaPencilAlt onClick={() => {
                    editKanban(tableau.id);
                  }}
                  />
                </Link>
              </div>
              <div className="admin_panel_kanban_content-part-delete"><FaTrash onClick={() => {
                console.log('delete', tableau.id);
                deleteKanban(tableau.id);
              }}
              />
              </div>
              <div className="admin_panel_kanban_content-part-join"><FaInfinity onClick={() => {
                console.log('join');
                onclickJoin();
              }}
              />
              </div>
            </div>
          </div>
        ))}

        <div className="admin_panel_kanban-content-part">
          <p>Ajouter un tableau</p>
          <Link exact="true" to="/admin/nouveau-kanban">
            <FaPlusCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminKanban;
