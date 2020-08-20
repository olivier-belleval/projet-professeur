import data from '../../data/kanbans';
import { GET_KANBANS } from '../action/data-actions';

export const initialState = {
  kanbans: data,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_KANBANS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
