import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import {
  FaPencilAlt,
  FaTrash,
  FaPlusCircle,
} from 'react-icons/fa';

import { HiOutlineUserGroup } from 'react-icons/hi';
import './style.scss';
import { AssociationModale } from '../AdminArticle';

const AdminKanban = ({
  list,
  onclickPen,
  deleteKanban,
  getKanbans,
  onOpenClick,
  modalOpen,
  getClasses,
  classAdded,
  classes,
  changeField,
  handleSubmitAssociation
}) => {
  useEffect(() => {
    getKanbans();
    getClasses();
  }, []);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeField({ [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSubmitAssociation();
  };

  return (
    <div className="container">
      <div className={modalOpen ? 'admin_panel_kanban blur' : 'admin_panel_kanban'}>
        <h1 className="admin_panel_kanban-title"> Espace administrateur - gestion des articles </h1>
        <div className="admin_panel_kanban-content">
          {list.map((tableau) => (
            <div className="admin_panel_kanban-content-part" key={tableau.id}>
              <div className="admin_panel_kanban-content-part-tableau">{tableau.title}</div>
              <div className="admin_panel_kanban_content-part-class">
                <p>{tableau.description}</p>
              </div>
              <div className="admin_panel_kanban_content-part-icons">
                <div className="admin_panel_kanban_content-part-modify"><FaPencilAlt onClick={() => {
                  onclickPen();
                }}
                />
                </div>
                <div className="admin_panel_kanban_content-part-delete"><FaTrash onClick={() => {
                  deleteKanban(tableau.id);
                }}
                />
                </div>
                <div className="admin_panel_kanban_content-part-join"><HiOutlineUserGroup onClick={() => (
                  onOpenClick(tableau.id)
                )}
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
      {modalOpen && (
      <AssociationModale
        classes={classes}
        classAdded={classAdded}
        handleInputChange={handleInputChange}
        onOpenClick={onOpenClick}
        handleSubmit={handleSubmit}
      />
      )}
    </div>
  );
};

export default AdminKanban;
