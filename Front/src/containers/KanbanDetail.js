import { connect } from 'react-redux';
import KanbanDetail from '../components/KanbanDetail';
import { getKanbanBySlug } from '../store/reducers/kanbans';

const mapStateToProps = (state, ownProps) => {

  const { slug } = ownProps.match.params;
  console.log(ownProps);
  return {
    kanban: getKanbanBySlug(state, slug),
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(KanbanDetail);
