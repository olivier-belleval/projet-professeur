import React from 'react';

import {
  FaPencilAlt, FaTrash, FaPlusCircle,
} from 'react-icons/fa';
import './style.scss';

const AdminClass = ({ list, onclickPen, onclickTrash, }) => {
  console.log(list);
  return (
    <div className="admin_panel_class">
      <h1 className="admin_panel_class-title"> Espace administrateur - gestion des classes </h1>
      <div className="admin_panel_class-content">
        {list.map((classe) => (
          <div className="admin_panel_class-content-part">
            <div className="admin_panel_class-content-part-class">{classe}</div>
            <div className="admin_panel_class_content-part-icons">
              <div className="admin_panel_class_content-part-modify"><FaPencilAlt onClick={() => {
                console.log('modify');
                onclickPen();
              }}
              />
              </div>
              <div className="admin_panel_class_content-part-delete"><FaTrash onClick={() => {
                console.log('delete');
                onclickTrash();
              }}
              />
              </div>
            </div>
          </div>
        ))}

        <div className="admin_panel_class-content-part">
          <p>Ajouter une classe</p>
          <FaPlusCircle />
        </div>
      </div>
    </div>
  );
};

export default AdminClass;
