import { connect } from 'react-redux';
import AdminKanban from '../components/AdminKanban';
import { editKanban, deleteKanban, joinClass } from '../store/action/AdminKanban';
import { getKanbans, getKanban } from '../store/action/data-actions';
import { closeMenu } from '../store/action';

const mapState = (state) => ({
  list: state.kanbans.list,
  kanban_id: state.kanbans.kanban_id,
  id_edited_kanban: state.editorKanban.id_edited_kanban,
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

  onclickJoin: () => {
    console.log("l'user veut associer de nouvelles classes");
    dispatch(joinClass());
  },

  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapState, mapDispatch)(AdminKanban);
