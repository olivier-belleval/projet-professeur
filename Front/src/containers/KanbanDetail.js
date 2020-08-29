import { connect } from 'react-redux';
import KanbanDetail from '../components/KanbanDetail';
import { getKanbanBySlug } from '../store/reducers/kanbans';
import { getKanbanDetail } from '../store/action/data-actions';
import {
  toggleModalCard,
  changeFieldCard,
  createCardSubmit,
  handleEditMode,

} from '../store/action/create-actions';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;

  return {
    kanban: getKanbanBySlug(state, slug),
    modalOpen: state.kanbans.modalOpen,
    newCardOrder: state.kanbans.newCardOrder,
    newCardContent: state.kanbans.newCardContent,
    editMode: state.kanbans.editMode,
    kanban_detail: state.kanbans.kanban_detail,
    datas: state.kanbans.datas,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onOpenClick: (id) => {
    console.log(id);
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

  getKanbanDetail: () => {
    dispatch(getKanbanDetail());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanDetail);
