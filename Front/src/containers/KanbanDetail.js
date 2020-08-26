import { connect } from 'react-redux';
import KanbanDetail from '../components/KanbanDetail';
import { getKanbanBySlug } from '../store/reducers/kanbans';
import { toggleModalCard } from '../store/action/create-actions';

const mapStateToProps = (state, ownProps) => {

  const { slug } = ownProps.match.params;
  console.log(ownProps);
  return {
    kanban: getKanbanBySlug(state, slug),
    modalOpen: state.kanbans.modalOpen,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onOpenClick: () => {
    console.log('click')
    dispatch(toggleModalCard());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanDetail);
