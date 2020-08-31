import React from 'react';
import KanbanCard from './KanbanCard';
import { AiFillPlusSquare } from "react-icons/ai";
import { deleteCard } from '../../../store/action/create-actions';


const KanbanList = ({ list, onOpenClick, deleteCard, getListId }) => {

  return(
  <div style={{width:'100%'}}>
      <div className="kanban-list" key={list.id} onMouseEnter={() => {
          getListId(list.id)
      }}>
        <div className="kanban-list-title">
          <span>{list.name}</span>
          <span><AiFillPlusSquare onClick={() => 
          {onOpenClick(list.id)}
            }/></span>
        </div>
        <div className="kanban-list-content">
          {list.cards && list.cards.map((card) => <KanbanCard key={card.id} card={card} deleteCard={deleteCard}/>)}
        </div>
      </div>
  </div>
);}

export default KanbanList;
