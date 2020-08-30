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
  GET_ARTICLES_ADMIN_PANEL, DELETE_ARTICLE, deleteArticleError, deleteArticleSuccess,
} from '../action/AdminArticle';

import { DELETE_KANBAN, deleteKanbanError, deleteKanbanSuccess } from '../action/AdminKanban';

import {
  GET_CLASSES_ADMIN_PANEL,
  DELETE_CLASS,
  deleteClassError,
  deleteClassSuccess,
} from '../action/AdminClass';

const ajaxMiddleware = (store) => (next) => (action) => {
  const local = 'http://localhost:3000/';

  const kanbanId = store.getState().kanbans.kanban_id;

  next(action);

  switch (action.type) {
    case GET_ARTICLES:
      axios({

        method: 'get',
        url: `${local}api/article/all`,
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
        url: `${local}api/admin/article/all`,
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
        url: `${local}api/article/write`,
        withCredentials: true,
        data: {
          title: store.getState().editor.title,
          content: store.getState().editor.content,

        },
      }).then((res) => {
        store.dispatch(createArticleSuccess());
        axios({

          method: 'get',
          url: `${local}api/admin/article/all`,
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

      const editedArticleId = store.getState().editor.id_edited_article;

      axios({

        method: 'put',
        url: `${local}api/article/${editedArticleId}/edit`,
        withCredentials: true,
        data: {
          title: store.getState().editor.title,
          content: store.getState().editor.content,

        },
      }).then((res) => {
        console.log('axios title :', store.getState().editor.title, 'axios content :', store.getState().editor.content);
        store.dispatch(editArticleSuccess());
        console.log('taddaaaaaaaaaa');
      }).catch((err) => {
        store.dispatch(editArticleError('Impossible d\'éditer'));
      });

      break;

    case DELETE_ARTICLE:

      const articleId = store.getState().articles.article_id;

      axios({

        method: 'delete',
        url: `${local}api/article/${articleId}/delete`,
        withCredentials: true,

      }).then((res) => {
        store.dispatch(deleteArticleSuccess());

        axios({

          method: 'get',
          url: `${local}api/admin/article/all`,
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
        url: `${local}api/admin/class/all`,
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
        url: `${local}api/admin/class/create`,
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
          url: `${local}api/admin/class/all`,
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

      const editedClassId = store.getState().editorClass.id_edited_class;

      axios({

        method: 'put',
        url: `${local}api/admin/class/${editedClassId}/edit`,
        withCredentials: true,
        data: {
          username: store.getState().editorClass.username,
          password: store.getState().editorClass.password,
          description: store.getState().editorClass.description,

        },
      }).then((res) => {
        console.log('axios username :', store.getState().editorClass.username, 'axios password :', store.getState().editorClass.password, 'axios description :', store.getState().editorClass.description);
        store.dispatch(editClassSuccess());
        console.log('taddaaaaaaaaaa');
      }).catch((err) => {
        store.dispatch(editClassError('Impossible d\'éditer'));
      });

      break;

    case DELETE_CLASS:

      const ClassId = store.getState().classes.class_id;

      axios({

        method: 'delete',
        url: `${local}api/admin/class/${ClassId}/delete`,
        withCredentials: true,

      }).then((res) => {
        store.dispatch(deleteClassSuccess());
        axios({

          method: 'get',
          url: `${local}api/admin/class/all`,
          withCredentials: true,

        }).then((res) => {
          console.log('res data sa mere :', res.data);
          store.dispatch(getClassesSuccess(res.data.data));
          console.log(('ce que tu veux'));
        }).catch((err) => {
          store.dispatch(getClassesError('Impossible de récupérer les classes...'));
        });
      }).catch((err) => {
        console.log('ouos : ', err);
        store.dispatch(deleteClassError('Impossible de supprimer la classe'));
      });

      break;

    case GET_KANBANS:

      axios({

        method: 'get',
        url: `${local}api/kanban/all`,
        withCredentials: true,

      }).then((res) => {
        store.dispatch(getKanbansSuccess(res.data.data));
      }).catch((err) => {
        store.dispatch(getKanbansError('Impossible de récupérer les kanbans...'));
      });

      break;

      // case GET_KANBAN:
      //   const kanban_id = store.getState().kanbans.kanban_id
      //   axios({
      //     method: 'get',
      //     url: `${local}api/kanban/${kanban_id}`,
      //     withCredentials: true,
      //   })
      //     .then((res) => {
      //       console.log(res.data);
      //       store.dispatch(getKanbanSuccess(res.data.allKanban));
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       store.dispatch(getKanbanError('Impossible de récupérer le kanban...'));
      //     });
      //   break;

    case CREATE_KANBAN_SUBMIT:

      axios({

        method: 'post',
        url: `${local}api/kanban/create`,
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
          url: `${local}api/kanban/all`,
          withCredentials: true,

        })

          .then((response) => {
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

      const kanbanId = store.getState().kanbans.kanban_id;

      axios({

        method: 'delete',
        url: `${local}api/kanban/${kanbanId}/delete`,
        withCredentials: true,
        // crossorigin: true,

      }).then((res) => {
        store.dispatch(deleteKanbanSuccess());
        axios({

          method: 'get',
          url: `${local}api/kanban/all`,
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
      const listId = store.getState().kanbans.list_id;
      // console.log("la création de card reçoit order :", Number(store.getState().kanbans.newCardOrder), " et la description : ", store.getState().kanbans.newCardContent, "et l'id passé en param est : ", listId);

      axios({

        method: 'post',
        url: `${local}api/kanban/list/${listId}/card/create`,
        withCredentials: true,
        data: {
          order: Number(store.getState().kanbans.newCardOrder),
          description: store.getState().kanbans.newCardContent,
          color: '#fff',

        },
      }).then((res) => {
        store.dispatch(createCardSuccess());

        axios({

          method: 'get',
          url: `${local}api/kanban/${kanbanId}`,
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

    default:
  }
};

export default ajaxMiddleware;
