import { connect } from 'react-redux';
import AdminClass from '../components/AdminClass';
import { editClass, deleteClass, getClassesAdminPanel } from '../store/action/AdminClass';
import { closeMenu } from '../store/action';

const mapState = (state) => ({
  list: state.classes.classes,
  class_id: state.classes.class_id,
  id_edited_class: state.editorClass.id_edited_class,
  message: state.classes.message,
});

const mapDispatch = (dispatch) => ({
  editClass: (id) => {
    dispatch(editClass(id));
  },

  deleteClass: (id) => {
    dispatch(deleteClass(id));
  },

  getClasses: () => {
    dispatch(getClassesAdminPanel());
  },

  closeMenu: () => {
    dispatch(closeMenu());
  },

});

export default connect(mapState, mapDispatch)(AdminClass);
