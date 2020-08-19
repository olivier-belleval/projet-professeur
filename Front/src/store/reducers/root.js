import { combineReducers } from 'redux';

import articles from './articles';
import user from './index';
import kanbans from './kanban';

export default combineReducers({
  articles: articles,
  user: user,
  kanbans,
});
