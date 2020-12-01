/**
 * import modules
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  FaPencilAlt,
  FaTrash,
  FaPlusCircle,
} from 'react-icons/fa';

import { HiOutlineUserGroup } from 'react-icons/hi';
import { AssociationModale } from '../AdminArticle';

/**
 * import locals
 */
import './style.scss';

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
                {tableau.classes && tableau.classes.map((classesObject) => (
                  <div className="classusername-container">
                    <div className="classusername-tag" key={classesObject.id}> {classesObject.username}

                    </div>
                    <div
                      className="class-remove"
                      onClick={() => {
                        removeClass(tableau.id);
                        removedClass(classesObject.username);
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

AdminKanban.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string,
  })).isRequired,
  editKanban: PropTypes.func.isRequired,
  deleteKanban: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  getKanbans: PropTypes.func.isRequired,
  onOpenClick: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  getClasses: PropTypes.func.isRequired,
  classAdded: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeField: PropTypes.func.isRequired,
  handleSubmitAssociation: PropTypes.func.isRequired,
  removeClass: PropTypes.func.isRequired,
  removedClass: PropTypes.func.isRequired,
};

export default AdminKanban;
