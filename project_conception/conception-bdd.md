# Conception de la BDD

## Analyse des entités

### Les entités 

Elles représentent une chose abstraite (comme un rôle, un tag ) ou concrètes (un utilisateur, une voiture) qu'on veut pouvoir créer / éditer / supprimer

* User
  * label
  * password
  * first name (opt)
  * last name (opt)

* Article
  * title
  * author
  * slug
  * excertp
  * content

* Role
  * label
  * description

* Kanban
  * title
  * slug
  * description
  * author
  * background

* Card
  * description
  * color
  * order

* List
  * name
  * order

* Tag
  * name
  * color
  

## Analyse des relations

### Article <--> User

Un user est l'autheur d'un Article

* verbe: écrire
* cardinalité:
  * User > Article: Un utilisateur peut écrire au minimum 0 et au maximum N  Article
  * Article > User: Un Article peut être écrit par au minimum 1 et au maximum 1 Users
* relation de type: 1:N

### Role <--> User

Un User posséde un ou plusieurs Role(s)

* verbe: posséder
* cardinalité
  * User > Role: Un User peut posséder au minimum 1 et au maximum N Roles
  * Role > User: Un Role peut être posséder par au minimum 0 et au maximum N User
* La relation: N: N (many to many)

### User <--> Kanban
Un User peux avoir un ou plusieurs kanban

* verbe: avoir
* cardinalité
  * User > Kanban: Un User peut avoir au minimum 0 et au maximum N kanban
  * Kanban > User: Un Kanban a au minimum 1 et au maximum 1 User
* la relation: 1:N
  
### Kanban <--> List

Un Kanban contient x List

* verbe: contenir
* * cardinalité:
  * Kanban > List Un Kanban contient au minimum 0 et au maximum N List
  * List > Kanban Une List est contenue au minimum dans 1 et au maximum 1 Kanban
* relation: 1:N

###  List <-->  Card
Une List inclue une Card

* verbe: inclure
* cardinalité
  * List <--> Card: Une List inclue au minimum 0 et au maximum N Cards
  * Card <-->List :Une Card peut être inclue au minimum 1 et au maximum 1 List
relation: 1:N

###  Card <-->  Tag
Une Card est associée a un Tag

* verbe: associer
* cardinalité
  * Card <--> Tag: Une Card est associée au minimum 0 et au maximum N Tags
  * Tag <-->Card :Une Tag est associé au minimum 0 et au maximum N Card
relation: N:N


## MCD - via MOCODO

```
Article: title, author, slug, excerpt, content
ecrire, 0N User, 11 Article
User: label, password, first_name, last_name
posséder, 1N User, 0N Role
Role: label, description

avoir, 0N User, 11 Kanban

Kanban: title, slug, description, author, background

contenir, 0N Kanban, 11 List

List: name, order
inclure, 0N List, 11 Card
Card: description, color, order
associer, 0N List, 11 Tag
Tag: name, color
```

## MLD

**article** (<ins>id</ins>,title, author, slug, excerpt, content, _#user(id)_)  
**user** (<ins>id</ins>,label, password, first_name, last_name)  
**m2m_user_role** (<ins>id</ins>,_#user(id)_, _#role(id)_)  
**role** (<ins>id</ins>,label, description)  
**kanban** (<ins>id</ins>,title, slug, description, author, background, _#user(id)_)  
**list** (<ins>id</ins>,name, order, _#kanban(id)_)  
**card** (<ins>id</ins>,description, color, order, _#list(id)_)  
**m2m_card_tag** (<ins>id</ins>,_#card(id)_, _#tag(id_)  
**tag** (<ins>id</ins>,name, color)
