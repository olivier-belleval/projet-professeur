import { connect } from 'react-redux';
import KanbansView from '../components/KanbansView';

const mapStateToProps = (state) => ({
  kanbans: state.kanbans.kanbans,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(KanbansView);
