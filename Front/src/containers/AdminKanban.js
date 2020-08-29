import { connect } from 'react-redux';
import AdminKanban from '../components/AdminKanban';
import { modifyKanban, deleteKanban, joinClass } from '../store/action/AdminKanban';
import { getKanbans, getKanban } from '../store/action/data-actions';

const mapState = (state) => ({
  list: state.kanbans.list,
  kanban_id: state.kanbans.kanban_id,
});

const mapDispatch = (dispatch) => ({
  onclickPen: () => {
    console.log("l'user veut modifier le tableau");
    dispatch(modifyKanban());
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
});

export default connect(mapState, mapDispatch)(AdminKanban);
