import { GET_ARTICLES_ERROR, GET_ARTICLES_SUCCESS, GET_ARTICLES} from '../action/data-actions';

export const initialState = {
  loading:false,
  error:'',
  list: [],
};

export default (state = initialState, action ={}) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        loading:true,
      };
    case GET_ARTICLES_SUCCESS:
      return{
        ...state,
        loading:false,
        list: [...action.payload],
        error:'',
      };
    case GET_ARTICLES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        list: [],
      };
      default:
        return state,
  }
}
