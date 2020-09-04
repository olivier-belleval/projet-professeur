import { connect } from 'react-redux';
import AdminKanban from '../components/AdminKanban';

import {
  editKanban,
  deleteKanban,
  submitAssociationKanban
} from '../store/action/AdminKanban';

import {
  changeField,
  toggleAddClassModal,
} from '../store/action/AdminArticle';

import { getClassesAdminPanel } from '../store/action/AdminClass';

import { getKanbans, getKanban } from '../store/action/data-actions';
import { closeMenu } from '../store/action';

const mapState = (state) => ({
  list: state.kanbans.list,
  kanban_id: state.kanbans.kanban_id,
  id_edited_kanban: state.editorKanban.id_edited_kanban,
  modalOpen: state.admin.modalOpen,
  item_id: state.admin.item_id,
  classAdded: state.admin.classAdded,
  classes: state.user.classes,
});

const mapDispatch = (dispatch) => ({
  editKanban: (id) => {
    console.log("l'user veut modifier le tableau", id);
    dispatch(editKanban(id));
  },

  deleteKanban: (id) => {
    console.log("l'user veut supprimer le tableau", id);
    dispatch(deleteKanban(id));
  },

  getKanbans: () => {
    dispatch(getKanbans());
  },

  changeField: (changedData) => {
    dispatch(changeField(changedData));
  },

  onOpenClick: (id) => {
    dispatch(toggleAddClassModal(id));
  },

  getClasses: () => {
    dispatch(getClassesAdminPanel());
  },

  handleSubmitAssociation: () => {
    dispatch(submitAssociationKanban());
  },

  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapState, mapDispatch)(AdminKanban);
