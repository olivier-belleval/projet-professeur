import { connect } from 'react-redux';
import AdminClass from '../components/AdminClass';
//import { modifyClass, deleteClass } from '../store/action/AdminClass';
import { getClasses } from '../store/action/user';

const mapState = (state) => ({
  list: state.user.classes,
});

const mapDispatch = (dispatch) => ({
  onclickPen: () => {
    console.log("l'user veut modifier la classe");
    dispatch(modifyClass());
  },

  onclickTrash: () => {
    console.log("l'user veut supprimer la classe");
    dispatch(deleteClass());
  },

  getClasses: () => {
    dispatch(getClasses());
  },

});

export default connect(mapState, mapDispatch)(AdminClass);
