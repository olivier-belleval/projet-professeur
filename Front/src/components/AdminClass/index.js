/**
 * import modules
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  FaPencilAlt, FaTrash, FaPlusCircle,
} from 'react-icons/fa';

/**
 * import locals
 */
import './style.scss';

const AdminClass = ({
  list,
  editClass,
  deleteClass,
  getClasses,
  closeMenu,
}) => {
  useEffect(() => {
    getClasses();
  }, []);

  return (
    <div className="admin_panel_class" onClick={closeMenu}>
      <h1 className="admin_panel_class-title"> Gestion des classes </h1>
      <div className="admin_panel_class-content">
        {list.map((classe) => (
          <div className="admin_panel_class-content-part" key={classe.class_id}>
            <div className="admin_panel_class-content-part-class">{classe.class_username}</div>
            <div className="admin_panel_article_content-part-description">
              {classe.class_description}
            </div>

            <div className="admin_panel_class_content-part-icons">
              <div className="admin_panel_class_content-part-modify">
                <Link to={`/admin/edit/class/${classe.class_id}`} key={classe.class_id}>
                  <FaPencilAlt onClick={() => {
                    editClass(classe.class_id);
                  }}
                  />
                </Link>

              </div>
              <div className="admin_panel_class_content-part-delete"><FaTrash onClick={() => {
                deleteClass(classe.class_id);
              }}
              />
              </div>
            </div>
          </div>
        ))}

        <div className="admin_panel_class-content-part">
          <p>Ajouter une classe</p>
          <Link exact="true" to="/admin/nouvelle-classe">
            <FaPlusCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

AdminClass.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    class_id: PropTypes.number.isRequired,
    class_username: PropTypes.string.isRequired,
    class_description: PropTypes.string.isRequired,
  })).isRequired,
  editClass: PropTypes.func.isRequired,
  deleteClass: PropTypes.func.isRequired,
  getClasses: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default AdminClass;
