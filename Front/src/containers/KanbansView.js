import { connect } from 'react-redux';
import KanbansView from '../components/KanbansView';
import { getKanbans, getKanban, getKanbanId } from '../store/action/data-actions';

const mapStateToProps = (state) => ({
  list: state.kanbans.list,
  kanban_id: state.kanbans.kanban_id
});

const mapDispatchToProps = (dispatch) => ({
  getKanbans: () => {
    dispatch(getKanbans());
  },

  getKanban: () => {
    dispatch(getKanban())
  },

  getKanbanId: (id) => {
    console.log('je suis l\'id récupéré dans la liste des kanbans : ', id)
    dispatch(getKanbanId(id))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbansView);
