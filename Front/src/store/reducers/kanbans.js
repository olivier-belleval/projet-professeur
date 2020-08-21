import { slugifyTitle } from '../../utils';
import { GET_KANBANS, GET_KANBANS_ERROR, GET_KANBANS_SUCCESS} from '../action/data-actions';
import data from '../../data/kanbans';

export const initialState = {
  loading: false,
  error: '',
  list: [],
  kanbans:data,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_KANBANS:
      return {
        ...state,
        loading: true,
      };
    case GET_KANBANS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...action.payload],
        error: '',
      };
    case GET_KANBANS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        list: [],
      };
    default:
      return state;
  }
};

export const getKanbanBySlug = (state, slug) => {
  const kanban = state.kanbans.kanbans.find((item) => {
    const slugTitle = slugifyTitle(item.title);
    const slugToFind = slugifyTitle(slug);
    return slugTitle === slugToFind;
  });

  return kanban;
};
