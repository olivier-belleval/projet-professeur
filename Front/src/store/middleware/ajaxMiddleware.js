import axios from 'axios';
import {
  GET_ARTICLES,
  getArticlesSuccess,
  getArticlesError,
  GET_KANBANS,
  getKanbansSuccess,
  getKanbansError,
  GET_KANBAN,
  getKanbanSuccess,
  getKanbanError,
  getKanbanDetailSuccess,
  GET_KANBAN_DETAIL,
} from '../action/data-actions';

import {
  CREATE_ARTICLE_SUMIT,
  createArticleSuccess,
  createArticleError,
  SUBMIT_EDITED_ARTICLE,
  editArticleError,
  editArticleSuccess,
} from '../action/editor-actions';

import {
  CREATE_CARD_SUBMIT,
  createCardSuccess,
  deleteCardSuccess,
  deleteCardError,
  DELETE_CARD,
  CREATE_LIST_SUBMIT,
  createListSuccess,
  createListError,
  DELETE_LIST,
  deleteListSuccess,
  deleteListError,
} from '../action/create-actions';

import {
  CREATE_CLASS_SUBMIT,
  createClassSuccess,
  createClassError,
  SUBMIT_EDITED_CLASS,
  editClassError,
  editClassSuccess,
} from '../action/class-editor-action';

import {
  CREATE_KANBAN_SUBMIT,
  createKanbanSuccess,
  createKanbanError,
} from '../action/kanban-editor-action';

import {
  GET_CLASSES,
  getClassesError,
  getClassesSuccess,
} from '../action/user';

import {
  GET_ARTICLES_ADMIN_PANEL,
  DELETE_ARTICLE,
  deleteArticleError,
  deleteArticleSuccess,
  SUBMIT_ASSOCIATION_ARTICLE,
  associationArticleError,
  associationArticleSuccess,
} from '../action/AdminArticle';

import {
  DELETE_KANBAN,
  deleteKanbanError,
  deleteKanbanSuccess,
  SUBMIT_ASSOCIATION_KANBAN,
  associationKanbanError,
  associationKanbanSuccess,
} from '../action/AdminKanban';

import {
  GET_CLASSES_ADMIN_PANEL,
  DELETE_CLASS,
  deleteClassError,
  deleteClassSuccess,
} from '../action/AdminClass';

const ajaxMiddleware = (store) => (next) => (action) => {
  const utils = {
    local: 'http://localhost:3000/',
    distant: '',
    kanbanId: '',
    listId: '',
    ClassId: '',
    list: '',
    articleId: '',
    editedArticleId: '',
    editedClassId: '',
    classUsername: '',
  };

  next(action);

  switch (action.type) {
    case GET_ARTICLES:
      axios({

        method: 'get',
        url: `${utils.local}api/article/all`,
        withCredentials: true,

      })
        .then((res) => {
          store.dispatch(getArticlesSuccess(res.data.data));
        })

        .catch((err) => {
          store.dispatch(getArticlesError('Impossible de récupérer les articles...'));
        });

      break;

    case GET_ARTICLES_ADMIN_PANEL:
      axios({

        method: 'get',
        url: `${utils.local}api/admin/article/all`,
        withCredentials: true,

      })
        .then((res) => {
          store.dispatch(getArticlesSuccess(res.data.data));
        })

        .catch((err) => {
          store.dispatch(getArticlesError('Impossible de récupérer les articles...'));
        });

      break;

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
        axios({

          method: 'get',
          url: `${utils.local}api/admin/article/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getArticlesSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getArticlesError('Impossible de récupérer les articles...'));
        });
      }).catch((err) => {
        store.dispatch(createArticleError('Impossible de créer'));
      });

      break;

    case SUBMIT_EDITED_ARTICLE:

      utils.editedArticleId = store.getState().editor.id_edited_article;

      axios({

        method: 'put',
        url: `${utils.local}api/article/${utils.editedArticleId}/edit`,
        withCredentials: true,
        data: {
          title: store.getState().editor.title,
          content: store.getState().editor.content,

        },
      }).then((res) => {
        store.dispatch(editArticleSuccess());
      }).catch((err) => {
        store.dispatch(editArticleError('Impossible d\'éditer'));
      });

      break;

    case DELETE_ARTICLE:

      utils.articleId = store.getState().articles.article_id;

      axios({

        method: 'delete',
        url: `${utils.local}api/article/${utils.articleId}/delete`,
        withCredentials: true,

      }).then((res) => {
        store.dispatch(deleteArticleSuccess());

        axios({

          method: 'get',
          url: `${utils.local}api/admin/article/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getArticlesSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getArticlesError('Impossible de récupérer les articles...'));
        });
      }).catch((err) => {
        store.dispatch(deleteArticleError('Impossible de supprimer'));
      });

      break;

    case GET_CLASSES_ADMIN_PANEL:

      axios({

        method: 'get',
        url: `${utils.local}api/admin/class/all`,
        withCredentials: true,

      }).then((res) => {
        store.dispatch(getClassesSuccess(res.data.data));
      }).catch((err) => {
        store.dispatch(getClassesError('Impossible de récupérer les classes...'));
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

        axios({

          method: 'get',
          url: `${utils.local}api/admin/class/all`,
          withCredentials: true,

        })

          .then((res) => {
            store.dispatch(getClassesSuccess(res.data.data));
          })
          .catch((err) => {
            store.dispatch(getClassesError('Impossible de récupérer les classes...'));
          });
      }).catch((err, res) => {
        store.dispatch(createClassError(res.data));
      });

      break;

    case SUBMIT_EDITED_CLASS:

      utils.editedClassId = store.getState().editorClass.id_edited_class;

      axios({

        method: 'put',
        url: `${utils.local}api/admin/class/${utils.editedClassId}/edit`,
        withCredentials: true,
        data: {
          username: store.getState().editorClass.username,
          password: store.getState().editorClass.password,
          description: store.getState().editorClass.description,

        },
      }).then((res) => {
        store.dispatch(editClassSuccess());
      }).catch((err) => {
        store.dispatch(editClassError('Impossible d\'éditer'));
      });

      break;

    case DELETE_CLASS:

      utils.ClassId = store.getState().classes.class_id;

      axios({

        method: 'delete',
        url: `${utils.local}api/admin/class/${utils.ClassId}/delete`,
        withCredentials: true,

      }).then((res) => {
        store.dispatch(deleteClassSuccess());
        axios({

          method: 'get',
          url: `${utils.local}api/admin/class/all`,
          withCredentials: true,

        }).then((res) => {
          console.log('res data sa mere :', res.data);
          store.dispatch(getClassesSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getClassesError('Impossible de récupérer les classes...'));
        });
      }).catch((err) => {
        store.dispatch(deleteClassError('Impossible de supprimer la classe'));
      });

      break;

    case GET_KANBANS:

      axios({

        method: 'get',
        url: `${utils.local}api/kanban/all`,
        withCredentials: true,

      }).then((res) => {
        store.dispatch(getKanbansSuccess(res.data.data));
      }).catch((err) => {
        store.dispatch(getKanbansError('Impossible de récupérer les kanbans...'));
      });

      break;

    case GET_KANBAN_DETAIL:
      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({
        method: 'get',
        url: `${utils.local}api/kanban/${utils.kanbanId}`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getKanbanDetailSuccess(res.data.data));
        })
        .catch((err) => {
          console.log(err);
          // store.dispatch(getKanbanError('Impossible de récupérer le kanban...'));
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
        console.log(res.data);
        store.dispatch(createKanbanSuccess());
        axios({
          method: 'get',
          url: `${utils.local}api/kanban/all`,
          withCredentials: true,
        }).then((response) => {
          store.dispatch(getKanbanSuccess(response.data.data));
        })
          .catch((err) => {
            console.log(err);
            store.dispatch(getKanbanError('Impossible de récupérer les kanbans...'));
          });
      }).catch((err, res) => {
        console.log(err);
        console.log(res.data);
        store.dispatch(createKanbanError(res.data));
      });

      break;

    case DELETE_KANBAN:

      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({
        method: 'delete',
        url: `${utils.local}api/kanban/${utils.kanbanId}/delete`,
        withCredentials: true,
      }).then((res) => {
        store.dispatch(deleteKanbanSuccess());
        axios({

          method: 'get',
          url: `${utils.local}api/kanban/all`,
          withCredentials: true,

        }).then((res) => {
          console.log('res data sa mere :', res.data);
          store.dispatch(getKanbansSuccess(res.data.data));
          console.log('ce que tu veux');
        }).catch((err) => {
          store.dispatch(getKanbansError('Impossible de récupérer les kanbans...'));
        });
      }).catch((err) => {
        console.log('erreur :', err);
        store.dispatch(deleteKanbanError('Impossible de supprimer les kanbans'));
      });

      break;

    case CREATE_CARD_SUBMIT:
      utils.listId = store.getState().kanbans.list_id;

      axios({

        method: 'post',
        url: `${utils.local}api/kanban/list/${utils.listId}/card/create`,
        withCredentials: true,
        data: {
          order: Number(store.getState().kanbans.newCardOrder),
          description: store.getState().kanbans.newCardContent,
          color: '#fff',

        },
      }).then((res) => {
        store.dispatch(createCardSuccess());
        utils.kanbanId = store.getState().kanbans.kanban_id;

        axios({

          method: 'get',
          url: `${utils.local}api/kanban/${utils.kanbanId}`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbanSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbanError('Impossible de récupérer les kanbans...'));
        });
      }).catch((err) => {
        store.dispatch(createCardError('Impossible de créer'));
      });

      break;

    case DELETE_CARD:
      utils.cardId = store.getState().kanbans.card_id;
      utils.list = store.getState().kanbans.list_id;
      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({

        method: 'delete',
        url: `${utils.local}api/kanban/list/${utils.list}/card/${utils.cardId}/delete`,
        withCredentials: true,
      }).then((res) => {
        store.dispatch(deleteCardSuccess());

        axios({
          method: 'get',
          url: `${utils.local}api/kanban/${utils.kanbanId}`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbanDetailSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbanError('Impossible de récupérer les kanbans...'));
        });
      }).catch((err) => {
        console.log(err);
      // store.dispatch(createCardError('Impossible de créer'));
      });

      break;
    case CREATE_LIST_SUBMIT:
      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({

        method: 'post',
        url: `${utils.local}api/kanban/${utils.kanbanId}/list/create`,
        withCredentials: true,
        data: {
          order: Number(store.getState().kanbans.newListOrder),
          name: store.getState().kanbans.newListTitle,
        },
      }).then((res) => {
        store.dispatch(createListSuccess());

        axios({

          method: 'get',
          url: `${utils.local}api/kanban/${utils.kanbanId}`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbanDetailSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbanError('Impossible de récupérer les kanbans...'));
        });
      }).catch((err) => {
        store.dispatch(createCardError('Impossible de créer'));
      });

      break;

    case DELETE_LIST:
      utils.listId = store.getState().kanbans.list_id;
      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({

        method: 'delete',
        url: `${utils.local}api/kanban/${utils.kanbanId}/list/${utils.listId}/delete`,
        withCredentials: true,
      }).then((res) => {
        store.dispatch(deleteListSuccess());

        axios({
          method: 'get',
          url: `${utils.local}api/kanban/${utils.kanbanId}`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbanDetailSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbanError('Impossible de récupérer les kanbans...'));
        });
      }).catch((err) => {
        console.log(err);
      // store.dispatch(createCardError('Impossible de créer'));
      });

      break;

    case SUBMIT_ASSOCIATION_ARTICLE:
      utils.articleId = store.getState().admin.item_id;
      utils.classUsername = store.getState().admin.classAdded;

      axios({

        method: 'post',
        url: `${utils.local}api/article/${utils.articleId}/associate`,
        withCredentials: true,
        data: {
          className: utils.classUsername,
        }
      }).then((res) => {
        store.dispatch(associationArticleSuccess());

        axios({

          method: 'get',
          url: `${utils.local}api/admin/article/all`,
          withCredentials: true,
  
        })
          .then((res) => {
            store.dispatch(getArticlesSuccess(res.data.data));
          })
  
          .catch((err) => {
            store.dispatch(getArticlesError('Impossible de récupérer les articles...'));
          });
      }).catch((err) => {
        console.log(err);
        store.dispatch(associationArticleError('Il y a eu une erreur lors de l\'association de classe'));
      });

      break;

    case SUBMIT_ASSOCIATION_KANBAN:
      utils.kanbanId = store.getState().admin.item_id;
      utils.classUsername = store.getState().admin.classAdded;

      axios({

        method: 'post',
        url: `${utils.local}api/kanban/${utils.kanbanId}/associate`,
        withCredentials: true,
        data: {
          className: utils.classUsername,
        }
      }).then((res) => {
        store.dispatch(associationKanbanSuccess());
        axios({

          method: 'get',
          url: `${utils.local}api/kanban/all`,
          withCredentials: true,
  
        }).then((res) => {
          console.log(res.data.data);
          store.dispatch(getKanbansSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbansError('Impossible de récupérer les kanbans...'));
        });
      }).catch((err) => {
        console.log(err);
        store.dispatch(associationKanbanError('Il y a eu une erreur lors de l\'association de kanban'));
      });

      break;

    default:
  }
};

export default ajaxMiddleware;
