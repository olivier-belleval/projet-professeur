import { connect } from 'react-redux';
import KanbanDetail from '../components/KanbanDetail';
import { getKanbanBySlug } from '../store/reducers/kanbans';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const { slug } = ownProps.match.params;
  return {
    kanban: getKanbanBySlug(state, slug),
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(KanbanDetail);
