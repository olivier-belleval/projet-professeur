import { connect } from 'react-redux';
import KanbanDetail from '../components/KanbanDetail';
import { getKanbanBySlug } from '../store/reducers/kanbans';
import {
  toggleModalCard,
  changeFieldCard,
  createCardSubmit,
  handleEditMode,

} from '../store/action/create-actions';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  console.log("Nos props ", ownProps);

  console.log('container kanban: ',
    state.kanbans.kanban
  )

  return {
    kanban: state.kanbans.kanban,
    modalOpen: state.kanbans.modalOpen,
    newCardOrder: state.kanbans.newCardOrder,
    newCardContent: state.kanbans.newCardContent,
    editMode: state.kanbans.editMode,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onOpenClick: (id) => {
    console.log('id dans kanbanDetail:', id);
    dispatch(toggleModalCard(id));
  },

  handleCardSubmit: () => {
    dispatch(createCardSubmit());
  },

  //controlled input for card form in kanban
  changeFieldCard: (changedData) => {
    dispatch(changeFieldCard(changedData));
  },

  //change edit mode to edit kanban details
  handleEditMode: (changedData) => {
    dispatch(handleEditMode(changedData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanDetail);
