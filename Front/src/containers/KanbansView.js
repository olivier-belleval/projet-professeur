import { connect } from 'react-redux';
import KanbansView from '../components/KanbansView';
import { getKanbans, getKanban } from '../store/action/data-actions';
import { closeMenu } from '../store/action';

const mapStateToProps = (state) => ({
  list: state.kanbans.list,
  kanban_id: state.kanbans.kanban_id,
});

const mapDispatchToProps = (dispatch) => ({
  getKanbans: () => {
    dispatch(getKanbans());
  },
  getKanban: (id) => {
    dispatch(getKanban(id));
  },

  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbansView);
