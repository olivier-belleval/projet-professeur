import { combineReducers } from 'redux';

import articles from './articles';
import user from './index';

export default combineReducers({
  articles: articles,
  user: user
});
