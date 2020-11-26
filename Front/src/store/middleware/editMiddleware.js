import axios from 'axios';
import { toast } from 'react-toastify';

import {
  getKanbansSuccess,
  getKanbansError,
  getKanbanError,
  getKanbanDetailSuccess,
} from '../action/data-actions';

import {
  SUBMIT_EDITED_ARTICLE,
  editArticleError,
  editArticleSuccess,
} from '../action/editor-actions';

import {
  SUBMIT_EDITED_CLASS,
  editClassError,
  editClassSuccess,
} from '../action/class-editor-action';

import {
  SUBMIT_EDITED_KANBAN,
  editKanbanError,
  editKanbanSuccess,
  SUBMIT_LIST_EDITION,
  listEditionSuccess,
  listEditionError,
  SUBMIT_CARD_EDITION,
  cardEditionError,
  cardEditionSuccess,
} from '../action/kanban-editor-action';

import {
  REMOVE_CLASS,
  removeClassSuccess,
  removeClassError,
} from '../action/AdminKanban';

const editMiddleware = (store) => (next) => (action) => {
  const utils = {
    local: 'http://localhost:3000/',
    distant: 'http://51.254.203.220/:3000/',
    kanbanId: '',
    listId: '',
    cardId: '',
    ClassId: '',
    list: '',
    articleId: '',
    editedArticleId: '',
    editedClassId: '',
    classUsername: '',
  };

  next(action);

  switch (action.type) {
    case SUBMIT_EDITED_ARTICLE:

      utils.editedArticleId = store.getState().editor.id_edited_article;

      axios({

        method: 'put',
        url: `${utils.distant}api/article/${utils.editedArticleId}/edit`,
        withCredentials: true,
        data: {
          title: store.getState().editor.title,
          content: store.getState().editor.content,

        },
      }).then((res) => {
        store.dispatch(editArticleSuccess());
        toast.dark("L'article a été édité.");
      }).catch((err) => {
        store.dispatch(editArticleError());
        toast.dark('Le mot de passe ou l\'identifiant sont incorrects');
      });

      break;

    case SUBMIT_EDITED_CLASS:

      utils.editedClassId = store.getState().editorClass.id_edited_class;

      axios({

        method: 'put',
        url: `${utils.distant}api/admin/class/${utils.editedClassId}/edit`,
        withCredentials: true,
        data: {
          username: store.getState().editorClass.username,
          password: store.getState().editorClass.password,
          description: store.getState().editorClass.description,

        },
      }).then((res) => {
        store.dispatch(editClassSuccess());
        toast.dark('La classe a bien été édité.');
      }).catch((err) => {
        store.dispatch(editClassError());
      });

      break;

    case SUBMIT_EDITED_KANBAN:

      const editedKanbanId = store.getState().editorKanban.id_edited_kanban;

      axios({

        method: 'put',
        url: `${utils.distant}api/kanban/${editedKanbanId}/edit`,
        withCredentials: true,
        data: {
          title: store.getState().editorKanban.title,
          background: store.getState().editorKanban.background,
          description: store.getState().editorKanban.description,

        },
      }).then((res) => {
        store.dispatch(editKanbanSuccess());
        toast.dark('Le kanban a bien été édité.');
        axios({

          method: 'get',
          url: `${utils.distant}api/kanban/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbansSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbansError());
        });
      }).catch((err) => {
        store.dispatch(editKanbanError());
      });

      break;

    case REMOVE_CLASS:

      utils.kanbanId = store.getState().admin.item_id;
      utils.classUsername = store.getState().admin.removedClass;

      axios({
        method: 'post',
        url: `${utils.distant}api/kanban/${utils.kanbanId}/associate/remove`,
        withCredentials: true,
        data: {
          className: utils.classUsername,
        },
      }).then((res) => {
        store.dispatch(removeClassSuccess());
        toast.dark('La classe est désassociéée.');
        axios({

          method: 'get',
          url: `${utils.distant}api/kanban/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbansSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbansError());
        });
      }).catch((err) => {
        store.dispatch(removeClassError());
      });

      break;

    case SUBMIT_LIST_EDITION:

      utils.listId = store.getState().kanbans.list_id;
      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({

        method: 'put',
        url: `${utils.distant}api/kanban/${utils.kanbanId}/list/${utils.listId}/edit`,
        withCredentials: true,
        data: {
          name: store.getState().kanbans.newListTitle,
          order: store.getState().editorKanban.listDetails.order,
        },
      }).then((res) => {
        store.dispatch(listEditionSuccess());
        toast.dark('La liste a bien été édité.');
        axios({
          method: 'get',
          url: `${utils.distant}api/kanban/${utils.kanbanId}`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbanDetailSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbanError());
        });
      }).catch((err) => {
        store.dispatch(listEditionError());
      });

      break;

    case SUBMIT_CARD_EDITION:

      utils.cardId = store.getState().editorKanban.card_id;
      utils.kanbanId = store.getState().kanbans.kanban_id;
      utils.listId = store.getState().kanbans.list_id;

      axios({

        method: 'put',
        url: `${utils.distant}api/kanban/list/${utils.listId}/card/${utils.cardId}/edit`,
        withCredentials: true,
        data: {
          description: store.getState().kanbans.newCardContent,
          order: store.getState().editorKanban.cardDetails.order,
          color: store.getState().kanbans.newCardColor,
        },
      }).then((res) => {
        store.dispatch(cardEditionSuccess());
        toast.dark('La carte a bien été édité.');
        axios({
          method: 'get',
          url: `${utils.distant}api/kanban/${utils.kanbanId}`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbanDetailSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbanError());
        });
      }).catch((err) => {
        store.dispatch(cardEditionError());
      });

      break;
    default:
  }
};

export default editMiddleware;
