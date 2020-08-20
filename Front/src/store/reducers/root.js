import { combineReducers } from 'redux';

import articles from './articles';
import user from './index';
import kanbans from './kanbans';

export default combineReducers({
  articles: articles,
  user: user,
  kanbans,
});
