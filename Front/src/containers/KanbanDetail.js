import { connect } from 'react-redux';
import KanbanDetail from '../components/KanbanDetail';
import { getKanbanBySlug } from '../store/reducers/kanbans';
import { closeMenu } from '../store/action';

import {
  getKanbanDetail,
  getListId,
} from '../store/action/data-actions';

import {
  toggleModalListEdition,
  getListDetails,
  getCardDetails,
  submitListEdition,
} from '../store/action/kanban-editor-action';

import {
  toggleModalCard,
  changeFieldCard,
  createCardSubmit,
  handleEditMode,
  deleteCard,
  toggleModalList,
  createListSubmit,
  deleteList,
} from '../store/action/create-actions';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;

  return {
    kanban: getKanbanBySlug(state, slug),
    modalOpen: state.kanbans.modalOpen,
    listModalOpen: state.kanbans.listModalOpen,
    newCardOrder: state.kanbans.newCardOrder,
    newCardContent: state.kanbans.newCardContent,
    editMode: state.kanbans.editMode,
    kanban_detail: state.kanbans.kanban_detail,
    datas: state.kanbans.datas,
    card_id: state.kanbans.card_id,
    list_id: state.kanbans.list_id,
    newListOrder: state.kanbans.newListOrder,
    newListTitle: state.kanbans.newListTitle,
    newCardColor: state.kanbans.newCardColor,
    editionModalList: state.editorKanban.editionModalList,
    listDetails: state.editorKanban.listDetails,
    cardDetails: state.editorKanban.cardDetails,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onOpenClick: (id) => {
    dispatch(toggleModalCard(id));
  },

  handleCardSubmit: () => {
    dispatch(createCardSubmit());
  },

  // Controlled input for card form in kanban
  changeField: (changedData) => {
    dispatch(changeFieldCard(changedData));
  },

  // Change edit mode to edit kanban details
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

  handleListSubmit: () => {
    dispatch(createListSubmit());
  },

  closeMenu: () => {
    dispatch(closeMenu());
  },

  deleteList: () => {
    dispatch(deleteList());
  },

  toggleListEdit: (id) => {
    dispatch(toggleModalListEdition(id));
  },

  getListDetails: (data) => {
    dispatch(getListDetails(data));
  },

  getCardDetails: (data) => {
    dispatch(getCardDetails(data));
  },

  submitListEdition: () => {
    dispatch(submitListEdition());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanDetail);
