import { connect } from 'react-redux';
import TogglerMenu from '../components/TogglerMenu';

import { toggleLoginForm } from '../store/action';

const mapStateToProps = (state) => ({
  opened: state.loginOpened,
  path: state.path,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenClick: () => {
    console.log('open or close login form');
    dispatch(toggleLoginForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TogglerMenu);
