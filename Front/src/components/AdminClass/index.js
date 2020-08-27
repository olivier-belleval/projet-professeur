import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import {
  FaPencilAlt, FaTrash, FaPlusCircle,
} from 'react-icons/fa';
import './style.scss';

const AdminClass = ({
  list,
  onclickPen,
  deleteClass,
  getClasses,
}) => {
  useEffect(() => {
    getClasses();
  }, []);
  console.log(list);
  return (
    <div className="admin_panel_class">
      <h1 className="admin_panel_class-title"> Espace administrateur - gestion des classes </h1>
      <div className="admin_panel_class-content">
        {list.map((classe) => (
          <div className="admin_panel_class-content-part" key={classe.class_id}>
            <div className="admin_panel_class-content-part-class">{classe.class_username}</div>
            <div className="admin_panel_article_content-part-description">
              {classe.class_description}
            </div>

            <div className="admin_panel_class_content-part-icons">
              <div className="admin_panel_class_content-part-modify"><FaPencilAlt onClick={() => {
                console.log('modify');
                onclickPen();
              }}
              />
              </div>
              <div className="admin_panel_class_content-part-delete"><FaTrash onClick={() => {
                console.log('delete', classe.class_id);
                // deleteClass(classe.class_id);
              }}
              />
              </div>
            </div>
          </div>
        ))}

        <div className="admin_panel_class-content-part">
          <p>Ajouter une classe</p>
          <Link exact to="/admin/nouvelle-classe">
            <FaPlusCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminClass;
