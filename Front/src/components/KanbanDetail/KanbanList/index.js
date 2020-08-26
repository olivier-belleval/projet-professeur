import React from 'react';
import KanbanCard from './KanbanCard';
import { AiFillPlusSquare } from "react-icons/ai";


const KanbanList = ({ list, onOpenClick }) => {
  return(
  <div>
      <div className="kanban-list" key={list.id}>
        <div className="kanban-list-title">
          <span>{list.name}</span>
          <span><AiFillPlusSquare onClick={onOpenClick}/></span>
        </div>
        <div className="kanban-list-content">
          {list.cards && list.cards.map((card) => <KanbanCard key={card.id} card={card} />)}


        </div>
      </div>;
  </div>
);}



export default KanbanList;
