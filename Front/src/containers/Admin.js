import { connect } from 'react-redux';
import Admin from '../components/Admin';
import { closeMenu } from '../store/action';

const mapState = null;

const mapDispatch = (dispatch) => ({

  closeMenu: () => {
    dispatch(closeMenu());
  },

});

export default connect(mapState, mapDispatch)(Admin);
