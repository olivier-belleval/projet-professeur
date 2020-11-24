import { connect } from 'react-redux';
import AdminClass from '../components/AdminClass';
import { editClass, deleteClass, getClassesAdminPanel } from '../store/action/AdminClass';

const mapState = (state) => ({
  list: state.classes.classes,
  class_id: state.classes.class_id,
  id_edited_class: state.editorClass.id_edited_class,
});

const mapDispatch = (dispatch) => ({
  editClass: (id) => {
    console.log("l'user veut modifier la classe", id);
    dispatch(editClass(id));
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
