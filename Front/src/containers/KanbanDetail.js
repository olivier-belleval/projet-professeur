import { connect } from 'react-redux';
import KanbanDetail from '../components/KanbanDetail';
import { getKanbanBySlug } from '../store/reducers/kanbans';

import {
  getKanbanDetail,
  getListId,
} from '../store/action/data-actions';

import {
  toggleModalCard,
  changeFieldCard,
  createCardSubmit,
  handleEditMode,
  deleteCard,
  toggleModalList
} from '../store/action/create-actions';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;

  return {
    kanban: getKanbanBySlug(state, slug),
    modalOpen: state.kanbans.modalOpen,
    listModalOpen : state.kanbans.listModalOpen,
    newCardOrder: state.kanbans.newCardOrder,
    newCardContent: state.kanbans.newCardContent,
    editMode: state.kanbans.editMode,
    kanban_detail: state.kanbans.kanban_detail,
    datas: state.kanbans.datas,
    card_id: state.kanbans.card_id,
    list_id: state.kanbans.list_id,
    newListOrder: state.kanbans.newListOrder,
    newListTitle: state.kanbans.newListTitle,

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
  changeField: (changedData) => {
    dispatch(changeFieldCard(changedData));
  },

  //change edit mode to edit kanban details
  handleEditMode: (changedData) => {
    dispatch(handleEditMode(changedData));
  },

  getKanbanDetail: () => {
    dispatch(getKanbanDetail());
  },

  deleteCard: (id) => {
    dispatch(deleteCard(id));
  },

  getListId: (id) => {
    dispatch(getListId(id));
  },

  openListModal: () => {
    dispatch(toggleModalList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanDetail);
