import {
  UPDATE_EDITOR_STATE,
  CREATE_ARTICLE_SUMIT,
  CREATE_ARTICLE_ERROR,
  CREATE_ARTICLE_SUCCESS,
  CANCEL_EDITING_ARTICLE,
  SUBMIT_EDITED_ARTICLE,
  EDIT_ARTICLE_ERROR,
  EDIT_ARTICLE_SUCCESS,

} from '../action/editor-actions';
import {
  EDIT_ARTICLE
} from '../action/AdminArticle';

const initialState = {
  title: '',
  content: '',
  loading:false,
  message:'',
  send: false,
  id_edited_article:'',
  editing: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CANCEL_EDITING_ARTICLE:
      return {
        ...state,
        title: '',
        content: '',
        editing: false,
        id_edited_article:'',
      };
    case UPDATE_EDITOR_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case SUBMIT_EDITED_ARTICLE:
      return {
        ...state,
        loading: true,
        editing: false,
      };
    case EDIT_ARTICLE_SUCCESS || EDIT_ARTICLE_ERROR:
      return {
        ...state,
        title: '',
        content: '',
        loading:false,
        send: false,
        id_edited_article:'',
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
        id_edited_article: action.payload,
        editing: !state.editing,
      };

    default:
      return state;
  }
};

export const getItemById = (state, id) => {
  console.log(state.articles.list);
  console.log(typeof id);
  console.log(id);
  const articleEdited = state.articles.list.find((elem) => elem.article_id === id);

  return articleEdited;
};
