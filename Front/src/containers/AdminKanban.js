import { connect } from 'react-redux';
import AdminKanban from '../components/AdminKanban';

import {
  editKanban,
  deleteKanban,
  submitAssociationKanban,
  removeClass,
  removedClass,
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
    dispatch(editKanban(id));
  },

  deleteKanban: (id) => {
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

  removeClass: (id) => {
    dispatch(removeClass(id));
  },

  removedClass: (id) => {
    dispatch(removedClass(id));
  },
});

export default connect(mapState, mapDispatch)(AdminKanban);
