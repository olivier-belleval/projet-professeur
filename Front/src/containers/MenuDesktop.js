import { connect } from 'react-redux';
import MenuDesktop from '../components/MenuDesktop';

import { logout } from '../store/action/user';

const mapStateToProps = (state) => ({
  teacher: state.user.teacher,
});

const mapDispatchToProps = (dispatch) => ({

  handleLogout: () => {
    console.log('handle logout');
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuDesktop);
