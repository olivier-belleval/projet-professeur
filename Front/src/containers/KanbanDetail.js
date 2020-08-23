import { connect } from 'react-redux';
import KanbanDetail from '../components/KanbanDetail';
import { getKanbanBySlug } from '../store/reducers/kanbans';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return {
    kanban: getKanbanBySlug(state, slug),
    kanban_detail: state.kanbans.kanban_detail,
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(KanbanDetail);
