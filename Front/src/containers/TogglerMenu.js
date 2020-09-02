import { connect } from 'react-redux';
import TogglerMenu from '../components/TogglerMenu';

import { toggleMenu } from '../store/action';
import { logout } from '../store/action/user';

const mapStateToProps = (state) => ({
  opened: state.user.opened,
  path: state.user.path,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenClick: () => {
    dispatch(toggleMenu());
  },

  handleLogout: () => {
    console.log('handle logout');
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TogglerMenu);
