# Cahier des charges

## Présentation du projet

La crise du coronavirus a forcé de nombreux enseignants à fournir des cours, numérisés et accessibles en ligne, à leurs élèves. Beaucoup ont confié, après la levée du confinement, que la qualité de leur travail ainsi que le suivi pédagogique des élèves en avaient pâti. Que ce soit par manque d'expérience ou de formation, tous se rejoignent sur un point : l'Education Nationale ne leur a jamais fourni les outils nécessaires pour assumer ce format.

Le logiciel Pronote, d'ores et déjà utilisé par le corps enseignant pour communiquer avec les élèves, pêche par son manque de personnalisation ainsi que par ses menus complexes et sa navigation lourde. 
Pour palier à ce problème, de nombreux professeurs requièrent les services de développeur web indépendants. D'autres encore souscrivent à de coûteux abonnements, auprès de différentes plateformes, pour réaliser leurs projets.

C’est là qu’intervient **O'MyProf**, pensé pour une professeure de français. Un site où elle pourra créer un espace pour chaque niveau auquel elle enseigne et en donner l’accès à ses élèves. Articles, tableaux de suivi du cours, informations culturelles seront ainsi affichés aux élèves concernés et permettra de compléter le cours.

## Objectifs du projet

L'objectif principal de ce projet est de fournir au client un environnement de travail personnalisable, adapté à la matière qu’il enseigne. Celui-ci pourra ainsi créer des tableaux (avec un système de listes et d'étiquettes, à l'instar de Trello), publier des articles et partager avec ses élèves des ressources complémentaires aux cours *(vidéos, pistes audio, url, …)*. Les élèves pourront également y retrouver les ressources partagées lors des cours *(polycopiés, …)* et, par exemple, les réimprimer en cas de perte.

## Définition du Minimum Viable Product

- Connexion / Déconnexion
- 2 types d'utilisateurs : Professeur / Classe
- Consultation des articles (les 2 utilisateurs)
- Consultation des tableaux (les 2 utilisateurs)
- Création d’un article (professeur)
- Création d’un tableau (professeur)
- Création d’un compte-classe (professeur)

## Le public visé (cible)

Ce projet, en plus de répondre aux besoins exprimés par le client, vise à faciliter les échanges de ressources entre un professeur et ses élèves.

Le rôle d’administrateur sera exclusivement réservé à un professeur.

L'âge des élèves diffère d'une classe à une autre mais également d'un établissement à un autre. Un professeur pouvant être mobilisé sur plusieurs établissements à la fois, le public visé sera donc âgé de 11 à 18 ans *(collège - lycée)*.

## Les fonctionnalités

### Connexion

Cela sera l’unique fonctionnalité accessible depuis la page d’accueil pour assurer la confidentialité du contenu. Le professeur ou les élèves pourront se connecter pour accéder à leurs espaces dédiés.

### Création/Modification/Suppression d'articles

Le professeur aura la possibilité de publier des articles. Ceux-ci seront modifiables ou supprimables en cas de besoin. Chaque article, lors de sa création, se verra attribué une ou plusieurs classes, évitant ainsi aux élèves d'un autre niveau de lire celui-ci.

> exemple: Un article concernant les épreuves du brevet blanc est publié par le professeur. Ce dernier précise lors de sa création que cet article concerne les élèves de 3ème.  Donc seuls les élèves de 3ème pourront le lire.

### Création/Modification/Suppression de tableaux/kanbans

Le professeur pourra créer des tableaux incluant un système de listes et d'étiquettes. Ces derniers seront modifiables et supprimables, comme les articles, uniquement par le professeur. Ce dernier attribuera une ou plusieurs classes au kanban créé, afin de terminer quel niveau pourrait y avoir accès.

> exemple: Un tableau listant les textes étudiés lors d'une séquence, les exercices associés, les polycopiés transmis et les ressources complémentaires proposées par le professeur.

### Création/Modification/Suppression de comptes

Le professeur pourra créer des accès *(1 compte par classe)* qui seront partagés entre les élèves d'une même classe. Ceci évitera ainsi aux élèves d'avoir à s'inscrire individuellement et permettra également au professeur de répondre aux directives du rectorat. En effet, un professeur n'est pas autorisé à forcer/inciter l'inscription d'un élève sur un site non affilié à l'Education Nationale *(afin d'empêcher toute récolte de données le concernant)*.

> exemple: Le professeur crée un compte en renseignant un login et un mot de passe puis l’associe au label 6ème A. Ce dernier partage enfin le compte avec ses élèves. Ceux-ci pourront se connecter au site et n'auront accès qu'aux ressources concernant la 6ème A.

## Potentielles évolutions

Le site gère actuellement la gestion de plusieurs classes par un seul professeur. Il paraît envisageable, sur le long terme, de rassembler les professeurs d'une même équipe sur le site. Cette solution permettrait aux élèves d'accéder à l'ensemble des ressources partagées par une équipe pédagogique depuis une adresse unique.

Le projet pourrait également devenir une plateforme ouverte à tous les professeurs, permettant à tout professeur d'accéder aux fonctionnalités de l'actuel projet, peu importe son établissement ou sa localisation. Un tel système aurait l'avantage d'uniformiser les partages de ressources entre professeurs et élèves.

Enfin, nous pourrions prévoir des modules plus poussés pour des matières spécifiques en proposant par exemple des outils adaptés aux matières : cartes géographiques, frises chronologiques, etc.

## Présentation de l'équipe et des rôles

- Product owner: Florian Levavasseur
- Scrum master: Emilie Devaux
- Lead dev Back: Olivier Belleval
- Lead Dev Front: Dimitri Hoareau

### Product owner & Référent Node : Florian Levavasseur

Porteur du projet, en lien direct avec la cliente. Représente les intérêts de cette dernière et des utilisateurs finaux.

### Scrum master & Référent React : Emilie Devaux

Garante de la méthode projet. S'assure de la bonne répartition des tâches et de l'avancement du projet. S'assure de la communication au sein de l'équipe et de la transmission des informations entre les développeurs.

### Lead Dev Back & Git Master : Olivier Belleval

Effectue les choix techniques back-end et s'assure de la bonne avancée du projet.

### Lead Dev Front: Dimitri Hoareau

Effectue les choix techniques front-end et s'assure de la bonne avancée du projet.

## Liste des technologies choisies

### FRONT

- **React** : Pour la gestion des composants
- **Redux** : Pour la gestion du store sans repasser par le state de l’app
- **SCSS**  : Pour l’utilisation des vars / et faciliter la lecture de la feuille de style avec la convention BEM

### BACK

- **NodeJS** : obligatoire pour l'accès aux packages npm Express, Dotenv, etc.. nécessaires à la réalisation du projet.
- **Redis** : Gestion de cache pour accélérer l'affichage des ressources stockées en BDD *(kanbans et articles)*.
- **PSQL** : utilisation d'un SGBD relationnel pour une gestion plus aisée des droits et une meilleure maintenance.

## Routes

### FRONT

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

### BACK

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
| POST | /api/kanban/create | kanbanController | Pour créer un kanban|
| PUT | /api/kanban/:id/edit | kanbanController | Pour modifier un kanban |
| DELETE | /api/kanban/:id/delete | kanbanController | Pour supprimer un kanban |
| -| -| -| -|
| GET | /api/kanban/:id/lists | kanbanController | Pour afficher les listes d'un kanban |
| POST | /api/kanban/:id/list/create | kanbanController | Pour créer une liste dans un kanban|
| PUT | /api/kanban/:id/list/:id/edit | kanbanController | Pour modifier une liste d'un kanban|
| DELETE | /api/kanban/:id/list/:id/delete | kanbanController | Pour supprimer une liste d'un kanban |
| -| -| -| -|
| GET | /api/lists/:id/cards | kanbanController | Pour afficher les cartes d'une liste |
| POST | /api/list/:id/card/create | kanbanController | Pour créer une carte dans une liste|
| PUT | /api/list/:id/card/:id/edit | kanbanController | Pour modifier une carte dans une liste|
| DELETE | /api/list/:id/card/:id/delete  | kanbanController | Pour supprimer une carte d'une liste |
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

## Arborescence du site

![arborescence](https://i.ibb.co/Dw90why/arborescence.png)