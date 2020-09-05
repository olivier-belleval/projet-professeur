import axios from 'axios';
import { toast } from 'react-toastify';

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
  REMOVE_CLASS_FROM_ARTICLE,
  removeClassSuccessFromArticle,
  removeClassErrorFromArticle,
} from '../action/AdminArticle';

import {
  DELETE_KANBAN,
  deleteKanbanError,
  deleteKanbanSuccess,
  SUBMIT_ASSOCIATION_KANBAN,
  associationKanbanError,
  associationKanbanSuccess,
  REMOVE_CLASS,
  removeClassSuccess,
  removeClassError,
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
        toast.dark("L'article a bien été ajouté.");
        axios({

          method: 'get',
          url: `${utils.local}api/admin/article/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getArticlesSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getArticlesError());
        });
      }).catch((err) => {
        toast.dark('Oops. Tous les champs doivent être remplis avec au minimum 5 caractères');
        store.dispatch(createArticleError());
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
        toast.dark("L'article a été édité.");
      }).catch((err) => {
        store.dispatch(editArticleError());
        toast.dark('Le mot de passe ou l\'identifiant sont incorrects');
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
        toast.dark("L'article a bien été supprimé.");
        axios({

          method: 'get',
          url: `${utils.local}api/admin/article/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getArticlesSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getArticlesError());
        });
      }).catch((err) => {
        store.dispatch(deleteArticleError());
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
      }).catch((err, res) => {
        store.dispatch(createClassError());
        toast.dark('Tous les champs doivent être remplis. Le mot de passe doit avoir au moins 4 caractères');
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
        toast.dark('La classe a bien été édité.');
      }).catch((err) => {
        store.dispatch(editClassError());
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
        toast.dark('La classe a bien été supprimé.');
        axios({

          method: 'get',
          url: `${utils.local}api/admin/class/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getClassesSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getClassesError());
        });
      }).catch((err) => {
        store.dispatch(deleteClassError());
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
          store.dispatch(getKanbanError('Impossible de récupérer le kanban...'));
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

    case DELETE_KANBAN:

      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({
        method: 'delete',
        url: `${utils.local}api/kanban/${utils.kanbanId}/delete`,
        withCredentials: true,
      }).then((res) => {
        store.dispatch(deleteKanbanSuccess());
        toast.dark('Le kanban a bien été supprimé.');
        axios({

          method: 'get',
          url: `${utils.local}api/kanban/all`,
          withCredentials: true,

        }).then((res) => {
          store.dispatch(getKanbansSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbansError());
        });
      }).catch((err) => {
        store.dispatch(deleteKanbanError());
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

    case DELETE_CARD:
      utils.cardId = store.getState().kanbans.card_id;
      utils.list = store.getState().kanbans.list_id;
      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({

        method: 'delete',
        url: `${utils.local}api/kanban/list/${utils.list}/card/${utils.cardId}/delete`,
        withCredentials: true,
      }).then((res) => {
        toast.dark('Oust la carte.');
        store.dispatch(deleteCardSuccess());

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
        store.dispatch(deleteCardError());
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
          listOrder = store.getState().kanbans.kanban_detail['0'].lists.length +1;
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

    case DELETE_LIST:
      utils.listId = store.getState().kanbans.list_id;
      utils.kanbanId = store.getState().kanbans.kanban_id;

      axios({

        method: 'delete',
        url: `${utils.local}api/kanban/${utils.kanbanId}/list/${utils.listId}/delete`,
        withCredentials: true,
      }).then((res) => {
        store.dispatch(deleteListSuccess());
        toast.dark('Oust la liste !');
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
      store.dispatch(deleteListError());
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
        },
      }).then((res) => {
        store.dispatch(associationArticleSuccess());
        toast.dark('Hop ! Classe associée.');
        axios({

          method: 'get',
          url: `${utils.local}api/admin/article/all`,
          withCredentials: true,

        })
          .then((res) => {
            store.dispatch(getArticlesSuccess(res.data.data));
          })

          .catch((err) => {
            store.dispatch(getArticlesError());
          });
      }).catch((err) => {
        store.dispatch(associationArticleError());
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
        },
      }).then((res) => {
        store.dispatch(associationKanbanSuccess());
        toast.dark('Hop ! Classe associée au kanban');
        axios({

          method: 'get',
          url: `${utils.local}api/kanban/all`,
          withCredentials: true,

        }).then((res) => {
          console.log(res.data.data);
          store.dispatch(getKanbansSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getKanbansError());
        });
      }).catch((err) => {   
        store.dispatch(associationKanbanError());
      });

      break;

    case SUBMIT_EDITED_KANBAN:

      const editedKanbanId = store.getState().editorKanban.id_edited_kanban;

      axios({

        method: 'put',
        url: `${utils.local}api/kanban/${editedKanbanId}/edit`,
        withCredentials: true,
        data: {
          title: store.getState().editorKanban.title,
          background: store.getState().editorKanban.background,
          description: store.getState().editorKanban.description,

        },
      }).then((res) => {
        store.dispatch(editKanbanSuccess());
        toast.dark('Le kanban a bien été édité.');
      }).catch((err) => {

        store.dispatch(editKanbanError());
      });

      break;

    case REMOVE_CLASS:

      utils.kanbanId = store.getState().admin.item_id;
      utils.classUsername = store.getState().admin.removedClass;

      axios({
        method: 'post',
        url: `${utils.local}api/kanban/${utils.kanbanId}/associate/remove`,
        withCredentials: true,
        data: {
          className: utils.classUsername,
        },
      }).then((res) => {
        store.dispatch(removeClassSuccess());
        toast.dark('La classe est désassociéée.');
        axios({

          method: 'get',
          url: `${utils.local}api/kanban/all`,
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
        url: `${utils.local}api/kanban/${utils.kanbanId}/list/${utils.listId}/edit`,
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
          url: `${utils.local}api/kanban/${utils.kanbanId}`,
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

    case REMOVE_CLASS_FROM_ARTICLE:

      utils.articleId = store.getState().admin.item_id;
      utils.classUsername = store.getState().admin.removedClass;

      axios({
        method: 'delete',
        url: `${utils.local}api/article/${utils.articleId}/associate/remove`,
        withCredentials: true,
        data: {
          className: utils.classUsername,
        },
      }).then((res) => {
        store.dispatch(removeClassSuccess());
        toast.dark('La classe a bien été désassociéé.');
        axios({

          method: 'get',
          url: `${utils.local}api/admin/article/all`,
          withCredentials: true,

        }).then((res) => {

          store.dispatch(getArticlesSuccess(res.data.data));
        }).catch((err) => {
          store.dispatch(getArticlesError());
        });
      }).catch((err) => {
        console.log('erreur :', err);
        store.dispatch(removeClassError());
      });

      break;
      
    case SUBMIT_CARD_EDITION:

      utils.cardId = store.getState().editorKanban.card_id;
      utils.kanbanId = store.getState().kanbans.kanban_id;
      utils.listId = store.getState().kanbans.list_id;

      axios({

        method: 'put',
        url: `${utils.local}api/kanban/list/${utils.listId}/card/${utils.cardId}/edit`,
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
          url: `${utils.local}api/kanban/${utils.kanbanId}`,
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

export default ajaxMiddleware;
