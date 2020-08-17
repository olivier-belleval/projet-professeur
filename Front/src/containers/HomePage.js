import { connect } from 'react-redux';
import HomePage from '../components/HomePage';


const mapStateToProps = (state) => ({
  isClicked: state.isClicked,
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch)=> ({
  onOpenClick: () => {
    console.log("open or close login form");
    dispatch(toggleLoginForm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


