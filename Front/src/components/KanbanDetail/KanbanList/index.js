import React from 'react';

const KanbanList = () => (
  <div className="kanban-list">

    <div className="kanban-list-title">
      Séance N°666
    </div>
    <div className="kanban-list-content">
      <KanbanCard />
      <KanbanCard />
      <KanbanCard />
      <KanbanCard />

    </div>
  </div>
);

const KanbanCard = () => (
  <div className="kanban-card"> 

    <div className="kanban-card-title">
      Titre de ma carte
    </div>
<div className="kanban-card-content">
    Continuer le dev
    On continue de coder les fonctionalités de notre application ! Ajoute tout le HTML, le CSS et le Javascript qui te sembleront nécessaire. Soit inventif/inventive pour les interfaces graphiques !

    Et si tu as des idées de fonctionnalités interessantes, fait toi plaisir ! N'hésites pas non plus à modifier ou étendre les fonctionnalités de l'API !

    Liste des fonctionnalités à coder :
</div>
  </div>
);

export default KanbanList;
