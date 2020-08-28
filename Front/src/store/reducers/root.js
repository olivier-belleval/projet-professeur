import { combineReducers } from 'redux';

import articles from './articles';
import user from './user';
import kanbans from './kanbans';
import editor from './textEditor';
import classes from './classes';
import editorClass from './classEditor';

export default combineReducers({
  articles,
  user,
  kanbans,
  editor,
  classes,
  editorClass,
});
