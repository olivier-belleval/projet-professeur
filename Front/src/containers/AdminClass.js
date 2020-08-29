import { connect } from 'react-redux';
import AdminClass from '../components/AdminClass';
import { modifyClass, deleteClass, getClassesAdminPanel } from '../store/action/AdminClass';

const mapState = (state) => ({
  list: state.classes.classes,
  class_id: state.classes.class_id,
});

const mapDispatch = (dispatch) => ({
  onclickPen: () => {
    console.log("l'user veut modifier la classe");
    dispatch(modifyClass());
  },

  deleteClass: (id) => {
    console.log("l'user veut supprimer la classe", id);
    dispatch(deleteClass(id));
  },

  getClasses: () => {
    dispatch(getClassesAdminPanel());
  },

});

export default connect(mapState, mapDispatch)(AdminClass);