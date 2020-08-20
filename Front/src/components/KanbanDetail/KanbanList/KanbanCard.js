import React from 'react';

const KanbanCard = () => (
  <div className="kanban-card"> 

    <div className="kanban-card-title">
      Titre de ma carte
    </div>
    <Tag /> <Tag /> <Tag /> <Tag />
<div className="kanban-card-content">
    Continuer le dev
    On continue de coder les fonctionalités de notre application ! Ajoute tout le HTML, le CSS et le Javascript qui te sembleront nécessaire. Soit inventif/inventive pour les interfaces graphiques !

    
</div>
  </div>
);

const Tag = () => (
  <span className="tag">
    tag
  </span>
)

export default KanbanCard;
