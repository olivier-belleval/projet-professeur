# FRONT

- Accueil: /

- Connexion: /login

- Déconnexion: /logout

- Contacts: /contacts

- Mentions légales: /mentions-legales

- Liste articles: /articles

- Article: /article/:id

- Liste kanbans: /kanban

- Kanban: /kanban/:id

- Admin: /admin

- Gestion des comptes: /admin/comptes

- Détails d'un compte: /admin/comptes/:id

- Gestion des articles: /admin/articles

- Détails d'un article: /admin/article/:id

- Gestion kanbans: /admin/kanbans

- Détail kanban: /admin/kanban/:id

# BACK

|Méthode|URL|Controller|Description|
|-------|---|----------|-----------|
| POST | /login/ | userController | Pour s'identifier en tant que class|
| POST | /login/admin | userController | Pour s'identifier en tant que teacher|
| POST | /login/logout | userController | Pour se déconnecter |
| -| -| -| -|
| GET | /api/articles | articleController | Pour afficher liste des articles en fonction de la classe|
| GET | /api/article/:id | articleController | Pour afficher les détails d'un article |
| POST | /api/article/write | articleController | Pour créer un article|
| PUT | /api/article/:id/edit | articleController | Pour modifier un article |
| DELETE | /api/article/:id/delete | articleController | Pour supprimer un article |
| POST | /api/article/associate| articleController | Pour associer une class a un article|
| POST | /api/article/:id/associate/remove | articleController | Pour retirer l’association une class a un article |
| -| -| -| -|
| GET | /api/kanbans | kanbanController | Pour afficher liste des kanbans en fonction de la classe|
| GET | /api/kanban/:id | kanbanController | Pour afficher les détails d'un kanban |
| POST | /api/kanban/create | kanbanController | Pour créer un kanban|
| PUT | /api/kanban/:id/edit | kanbanController | Pour modifier un kanban |
| DELETE | /api/kanban/:id/delete | kanbanController | Pour supprimer un kanban |
| POST | /api/kaban/:articleId/associate | kanbanController | Pour associer une class a un kanban |
| POST | /api/kanban/:id/associate/remove | kanbanController | Pour retirer l’association une class a un kanban |
| -| -| -| -|
| GET | /api/kanban/:id/list/:id | kanbanController | Pour afficher une liste d'un kanban|
| POST | /api/kanban/:id/list/create | kanbanController | Pour créer une liste dans un kanban|
| PUT | /api/kanban/:kanbanId/list/:listId/edit | kanbanController | Pour modifier une liste d'un kanban|
| DELETE | /api/kanban/:kanbanId/list/:listId/delete | kanbanController | Pour supprimer une liste d'un kanban |
| -| -| -| -|
| GET | /list/:listId/card/:cardId | kanbanController | pour afficher une carte |
| POST | /api/list/:id/card/create | kanbanController | Pour créer une carte dans une liste|
| PUT | /api/list/:listId/card/:cardId/edit | kanbanController | Pour modifier une carte dans une liste|
| DELETE | /api/list/:listId/card/:cardId/delete  | kanbanController | Pour supprimer une carte d'une liste |
| -| -| -| -|
| GET | /api/tags | kanbanController | Pour afficher la liste des tags |
| GET | /api/tag/:id | kanbanController | Pour afficher un tag |
| POST | /api/tag/create | kanbanController | Pour créer un tag |
| PUT | /api/tag/:id/edit| kanbanController | Pour modifier un tag|
| DELETE | /api/tag/:id/delete  | kanbanController | Pour supprimer un tag|
| POST | /card/:cardId/tag/:tagId/add | kanbanController | Pour associer un tag à une carte|
| DELETE | /card/:cardId/tag/:tagId/remove | kanbanController | Pour supprimer l'association d'un tag et d'une carte|
| -| -| -| -|
| GET | api/admin/classes | adminController | afficher liste des classes|
| GET | api/admin/class/:id | adminController | afficher les détails d'une classe|
| POST | api/admin/class/create | adminController | créer une classe|
| PUT | api/admin/class/:id/edit | adminController | modifier une classe|
| DELETE | api/admin/class/:id/delete | adminController | supprimer une classe|


# Besoins

* = non obligatoire

| fonction | endroit    |   infos   |
|   -      |   -        |   -       |
|   get one class   |   params(adresse)     |   class id |
|   create class    |   body    |   username - password - description |
|   create class    |   session    |    teacher id |
|   edit class  |   params(adresse)    |   class id |
|   edit class  |   body    |   username - password - description |
|   delete class  |   params(adresse)    |   class id |
| - | - | - |
|   get one article |   params(adresse)  |  article id |
|   create one article |    session |   user id |
|   create one article |    body    |   title - content |
|   edite article |    body    |   title - content |
|   delete article |    params(adresse)    |   article id |
| - | - | - |
|   associate class to article |    params(adresse)    |   article id |
|   associate class to article |    body    |   class id |
|   remove association class to article |    body    |   class id |
| - | - | - |
|   get one kaban by id |    params(adresse)    |   kanban id |
|   create kanban |    session    |   teacher id |
|   create kanban |    body    |   titre - description - background * |
|   edit kanban |    body    |   titre - description - background |
|   delete kanban |    params(adresse)    |   kanban id |
|   edit kanban |    body    |   titre - description - background |
| - | - | - |
|   associate class to kanban |    params(adresse)    |   kanban id |
|   associate class to kanban |    body    |   class id |
|   remove association class to kanban |    params(adresse)    |   kanban id |
|   remove association class to kanban |    body    |   class id |
| - | - | - |
|   get one list by id |    params    |   list id |
|   create list |    params    |   kanban id |
|   create list |    body    |   name - order |
|   edit list |    params    |   kanban id - list id|
|   edit list |    body    |   name - order |
|   delete list |    params    |   list id |
| - | - | - |
|   get one card by id |    params    |   card id - list id |
|   create card |    params    |   list id |
|   create card |    body    |   description - order - color *  |
|   edit card |    params    |   list id - card id |
|   edit card |    body    |   description - order - color  |
|   delete card |   params  |   list id - card id   |
| - | - | - |
|   get one tag by id |    params    |   tag id |
|   create tag |    body    |   name - color *  |
|   edit tag |    params    |   tag id |
|   edit tag |    body    |   name - color  |
|   delete tag |   params  |   tag id   |
| - | - | - |
|   associate tag to card |    params(adresse)    |   tag id - card id |
|   remove association tag to card |    params(adresse)    |   tag id - card id |
| - | - | - |
|   class login |    body    |   username - password |
|   admin login |    body    |   username - password |
