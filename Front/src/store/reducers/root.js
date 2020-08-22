import { combineReducers } from 'redux';

import articles from './articles';
import user from './user';
import kanbans from './kanbans';

export default combineReducers({
  articles,
  user,
  kanbans,
});
