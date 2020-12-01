import React from 'react';
import { MdClose, MdMoreVert } from 'react-icons/md';
import PropTypes from 'prop-types';

const KanbanCard = ({
  card,
  deleteCard,
  getCardDetails,
  toggleCardEdit,
  teacher,
}) => (
  <div className="kanban-card" style={{ backgroundColor: card.color }}>

    <div className="kanban-card-title">
      {teacher && (
        <span>
          <MdMoreVert onClick={() => (
            getCardDetails({
              description: card.description,
              order: card.order,
              color: card.color,
            }),
            toggleCardEdit(card.id)
          )}
          />
          <MdClose onClick={() => {
            deleteCard(card.id);
          }}
          />
        </span>
      )}

    </div>
    {card.tags && card.tags.map((tag) => <Tag key={tag.id} tag={tag} />)}
    <div className="kanban-card-content">
      {card.description}

    </div>
  </div>
);

KanbanCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  deleteCard: PropTypes.func.isRequired,
  getCardDetails: PropTypes.func.isRequired,
  toggleCardEdit: PropTypes.func.isRequired,
  teacher: PropTypes.bool.isRequired,
};

const Tag = ({ tag }) => (
  <span className="tag">
    {tag.name}
  </span>
);

Tag.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default KanbanCard;
