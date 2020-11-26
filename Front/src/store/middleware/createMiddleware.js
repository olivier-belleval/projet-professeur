import axios from 'axios';
import { toast } from 'react-toastify';

import {
  getArticlesSuccess,
  getArticlesError,
  getKanbansSuccess,
  getKanbansError,
  getKanbanError,
  getKanbanDetailSuccess,
} from '../action/data-actions';

import {
  CREATE_ARTICLE_SUMIT,
  createArticleSuccess,
  createArticleError,
} from '../action/editor-actions';

import {
  CREATE_CARD_SUBMIT,
  createCardSuccess,
  CREATE_LIST_SUBMIT,
  createListSuccess,
  createListError,
} from '../action/create-actions';

import {
  CREATE_CLASS_SUBMIT,
  createClassSuccess,
  createClassError,
} from '../action/class-editor-action';

import {
  CREATE_KANBAN_SUBMIT,
  createKanbanSuccess,
  createKanbanError,
} from '../action/kanban-editor-action';

import {
  getClassesError,
  getClassesSuccess,
} from '../action/user';


const createMiddleware = (store) => (next) => (action) => {
  const utils = {
    local: 'http://localhost:3000/',
    distant: 'http://51.254.203.220:3000/',
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
    case CREATE_ARTICLE_SUMIT:

      axios({

        method: 'post',
        url: `${utils.local}api/article/write`,
        withCredentials: true,
        data: {
          title: store.getState().editor.title,
          content: store.getState().editor.content,

        },
      }).then((res) => {
        store.dispatch(createArticleSuccess());
        toast.dark("L'article a bien été ajouté.");
        axios({

          method: 'get',
          url: `${utils.local}api/admin/article/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getArticlesSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getArticlesError());
          console.log(err.response)
        });
      }).catch((err) => {
        toast.dark('Oops. Tous les champs doivent être remplis avec au minimum 5 caractères');
        store.dispatch(createArticleError());
        console.log(err.response)
      });

      break;

    case CREATE_CLASS_SUBMIT:

      axios({

        method: 'post',
        url: `${utils.local}api/admin/class/create`,
        withCredentials: true,
        data: {
          username: store.getState().editorClass.username,
          password: store.getState().editorClass.password,
          description: store.getState().editorClass.description,

        },
      }).then((res) => {
        store.dispatch(createClassSuccess());
        toast.dark('La classe a bien été créé.');
        axios({

          method: 'get',
          url: `${utils.local}api/admin/class/all`,
          withCredentials: true,

        })
          .then((res) => {
            store.dispatch(getClassesSuccess(res.data.data));
          })
          .catch((err) => {
            store.dispatch(getClassesError());
          });
      }).catch((err) => {
        store.dispatch(createClassError());
        toast.dark('Tous les champs doivent être remplis. Le mot de passe doit avoir au moins 4 caractères');
      });

      break;

    case CREATE_KANBAN_SUBMIT:

      axios({

        method: 'post',
        url: `${utils.local}api/kanban/create`,
        withCredentials: true,
        data: {
          title: store.getState().editorKanban.title,
          background: store.getState().editorKanban.background,
          description: store.getState().editorKanban.description,

        },
      }).then((res) => {
        store.dispatch(createKanbanSuccess());
        toast.dark('Le kanban a bien été créé.');
        axios({

          method: 'get',
          url: `${utils.local}api/kanban/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbansSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbansError());
        });
      }).catch((err, res) => {
        toast.dark('Le titre et la description sont obligatoires.');
        store.dispatch(createKanbanError(res.data));
      });

      break;

    case CREATE_CARD_SUBMIT:
      utils.listId = store.getState().kanbans.list_id;
      let cardOrder;

      store.getState().kanbans.kanban_detail['0'].lists.map((elem) => {
        if (elem.id === utils.listId) {
          if (!elem.cards) {
            cardOrder = 1;
          }
          else {
            cardOrder = elem.cards.length + 1;
          }
          return cardOrder;
        }
      });

      axios({

        method: 'post',
        url: `${utils.local}api/kanban/list/${utils.listId}/card/create`,
        withCredentials: true,
        data: {
          order: cardOrder,
          description: store.getState().kanbans.newCardContent,
          color: store.getState().kanbans.newCardColor,

        },
      }).then((res) => {
        store.dispatch(createCardSuccess());
        toast.dark('La carte a bien été créé.');
        utils.kanbanId = store.getState().kanbans.kanban_id;

        axios({

          method: 'get',
          url: `${utils.local}api/kanban/${utils.kanbanId}`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbanDetailSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbanError());
        });
      }).catch((err) => {
        toast.dark('Oops. Il faut un contenu à la carte pour être créé.');
        store.dispatch(createCardError());
      });

      break;

    case CREATE_LIST_SUBMIT:
      utils.kanbanId = store.getState().kanbans.kanban_id;
      let listOrder;

      (() => {
        if (!store.getState().kanbans.kanban_detail['0'].lists) {
          listOrder = 1;
        }
        else {
          listOrder = store.getState().kanbans.kanban_detail['0'].lists.length + 1;
        }
      })();

      axios({

        method: 'post',
        url: `${utils.local}api/kanban/${utils.kanbanId}/list/create`,
        withCredentials: true,
        data: {
          order: listOrder,
          name: store.getState().kanbans.newListTitle,
        },
      }).then((res) => {
        store.dispatch(createListSuccess());
        toast.dark('La liste a bien été créé.');

        axios({

          method: 'get',
          url: `${utils.local}api/kanban/${utils.kanbanId}`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbanDetailSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbanError());
        });
      }).catch((err) => {
        toast.dark('Un petit titre à la liste peut-être ?');
        store.dispatch(createListError());
      });

      break;

    default:
  }
};

export default createMiddleware;
