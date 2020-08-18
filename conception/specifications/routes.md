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
| POST | /api/login | userController | Pour s'identifier |
| POST | /api/logout | userController | Pour se déconnecter |
| -| -| -| -|
| GET | /api/articles | articleController | Pour afficher liste des articles en fonction de la classe|
| GET | /api/article/:id | articleController | Pour afficher les détails d'un article |
| POST | /api/article/write | articleController | Pour créer un article|
| PUT | /api/article/:id/edit | articleController | Pour modifier un article |
| DELETE | /api/article/:id/delete | articleController | Pour supprimer un article |
| -| -| -| -|
| GET | /api/kanbans | kanbanController | Pour afficher liste des kanbans en fonction de la classe|
| GET | /api/kanban/:id | kanbanController | Pour afficher les détails d'un kanban |
| GET | /api/kanban/class/:classname | kanbanController | Pour afficher les kanbans d'une classe |
| POST | /api/kanban/create | kanbanController | Pour créer un kanban|
| PUT | /api/kanban/:id/edit | kanbanController | Pour modifier un kanban |
| DELETE | /api/kanban/:id/delete | kanbanController | Pour supprimer un kanban |
| -| -| -| -|
| GET | /api/kanban/:id/lists | kanbanController | Pour afficher les listes d'un kanban |
| POST | /api/kanban/:id/list/create | kanbanController | Pour créer une liste dans un kanban|
| PUT | /api/kanban/:id/list/:id/edit | kanbanController | Pour modifier une liste d'un kanban|
| DELETE | /api/kanban/:kanbanId/list/:listId/delete | kanbanController | Pour supprimer une liste d'un kanban |
| -| -| -| -|
| GET | /api/lists/:id/cards | kanbanController | Pour afficher les cartes d'une liste |
| POST | /api/list/:id/card/create | kanbanController | Pour créer une carte dans une liste|
| PUT | /api/list/:id/card/:id/edit | kanbanController | Pour modifier une carte dans une liste|
| DELETE | /api/list/:listId/card/:cardId/delete  | kanbanController | Pour supprimer une carte d'une liste |
| -| -| -| -|
| GET | /api/card/:id/tags | kanbanController | Pour afficher les tags d'une carte |
| POST | /api/tag/create | kanbanController | Pour créer un tag |
| PUT | /api/tag/:id/edit| kanbanController | Pour modifier un tag|
| DELETE | /api/tag/:id/delete  | kanbanController | Pour supprimer un tag|
| POST | /api/card/:id/tag/:id/add | kanbanController | Pour associer un tag à une carte|
| DELETE | /api/card/:id/tag/:id/remove | kanbanController | Pour supprimer l'association d'un tag et d'une carte|
| -| -| -| -|
| GET | api/admin/classes | adminController | afficher liste des classes|
| GET | api/admin/class/:id | adminController | afficher les détails d'une classe|
| POST | api/admin/class/create | adminController | créer une classe|
| PUT | api/admin/class/:id/edit | adminController | modifier une classe|
| DELETE | api/admin/class/:id/delete | adminController | supprimer une classe|
