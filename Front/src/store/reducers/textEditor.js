import {
  UPDATE_EDITOR_STATE,
  CREATE_ARTICLE_SUMIT,
  CREATE_ARTICLE_ERROR,
  CREATE_ARTICLE_SUCCESS,

} from '../action/editor-actions';
import {
  EDIT_ARTICLE
} from '../action/AdminArticle'

const initialState = {
  title: '',
  content: '',
  loading:false,
  message:'',
  send: false,
  id:'',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_EDITOR_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case CREATE_ARTICLE_SUMIT:
      return {
        ...state,
        loading: true,
        message: '',
        send: true,
      };
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        title: '',
        content: '',
        message: 'L\'article a été ajouté !',
        send: false,
      };
    case CREATE_ARTICLE_ERROR:
      return {
        ...state,
        loading: false,
        message: 'Il y a eu une erreur à l\'envoi de votre article',
        send: false,
      };
    case EDIT_ARTICLE:
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};
