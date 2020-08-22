import { connect } from 'react-redux';
import KanbansView from '../components/KanbansView';
import { getKanbans} from '../store/action/data-actions';

const mapStateToProps = (state) => ({
  list: state.kanbans.list,
});

const mapDispatchToProps = (dispatch) => ({
  getKanbans: () => {
    dispatch(getKanbans());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbansView);
