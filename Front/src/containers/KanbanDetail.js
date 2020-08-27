import { connect } from 'react-redux';
import KanbanDetail from '../components/KanbanDetail';
import { getKanbanBySlug } from '../store/reducers/kanbans';
import {
  toggleModalCard,
  changeFieldCard,
} from '../store/action/create-actions';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;

  return {
    kanban: getKanbanBySlug(state, slug),
    modalOpen: state.kanbans.modalOpen,
    newCardTitle: state.kanbans.title,
    newCardContent: state.kanbans.content,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onOpenClick: () => {
    dispatch(toggleModalCard());
  },
  //controlled input for card form in kanban
  changeFieldCard: (changedData) => {
    dispatch(changeFieldCard(changedData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanDetail);
