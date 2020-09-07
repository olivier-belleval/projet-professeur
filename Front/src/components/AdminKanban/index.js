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
  editKanban,
  deleteKanban,
  closeMenu,
  getKanbans,
  onOpenClick,
  modalOpen,
  getClasses,
  classAdded,
  classes,
  changeField,
  handleSubmitAssociation,
  removeClass,
  removedClass,
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
      <div className={modalOpen ? 'admin_panel_kanban blur' : 'admin_panel_kanban'} onClick={closeMenu}>
        <h1 className="admin_panel_kanban-title"> Gestion des kanbans </h1>
        <div className="admin_panel_kanban-content">
          {list.map((tableau) => (
            <div className="admin_panel_kanban-content-part" key={tableau.id}>
              <div className="admin_panel_kanban-content-part-tableau">{tableau.title}</div>
              <div className="admin_panel_kanban_content-part-class">
                {tableau.classes && tableau.classes.map((classes) => (
                  <div className="classusername-container">
                    <div className="classusername-tag" key={classes.id}> {classes.username}

                    </div><div
                      className="class-remove"
                      onClick={() => {
                        removeClass(tableau.id);
                        removedClass(classes.username);
                      }}
                    >
                      x
                          </div>
                  </div>
                ))}
              </div>
              <div className="admin_panel_kanban_content-part-icons">
                <div className="admin_panel_kanban_content-part-modify">
                  <Link to={`/admin/edit/kanban/${tableau.id}`} key={tableau.id}>
                    <FaPencilAlt onClick={() => {
                      editKanban(tableau.id);
                    }}
                    />
                  </Link>
                </div>
                <div className="admin_panel_kanban_content-part-delete">
                  <FaTrash onClick={() => {
                    console.log('delete', tableau.id);
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
