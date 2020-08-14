# Conception de la BDD

## Analyse des entités

### Les entités 

* Teacher
  * username
  * password
  * first name (opt)
  * last name (opt)

* Article
  * title
  * author
  * slug
  * excertp
  * content

* Class
  * username
  * description
  * password

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

### Article <--> Teacher

Un Teacher est l'autheur d'un Article

* verbe: écrire
* cardinalité:
  * Teacher > Article: Un utilisateur peut écrire au minimum 0 et au maximum N Article
  * Article > Teacher: Un Article peut être écrit par au minimum 1 et au maximum 1 Teachers
* relation de type: 1:N

### Article <--> Class

Une Class peux voir un Article

* verbe: voire
* cardinalité:
  * Class > Article: Une Classe peut voire au minimum 0 et au maximum N Article
  * Article > Class: Un Article peut être vu par au minimum 0 et au maximum N Class
* relation de type: N:N

### Class <--> Teacher

Un Teacher crée un ou plusieurs Class(s)

* verbe: creer
* cardinalité
  * Teacher > Class: Un Teacher peut creer au minimum 0 et au maximum N Classs
  * Class > Teacher: Une Class peut être creer par au minimum 1 et au maximum 1 Teacher
* La relation: 1: N

### Teacher <--> Kanban
Un Teacher peux avoir un ou plusieurs kanban

* verbe: avoir
* cardinalité
  * Teacher > Kanban: Un Teacher peut avoir au minimum 0 et au maximum N kanban
  * Kanban > Teacher: Un Kanban a au minimum 1 et au maximum 1 Teacher
* la relation: 1:N
  
### Class <--> Kanban
Une Class peux consulter un ou plusieurs kanban

* verbe: consulter
* cardinalité
  * Class > Kanban: Une Class peut consulter au minimum 0 et au maximum N kanban
  * Kanban > Class: Un Kanban peux etre consulter au minimum 0 et au maximum N Class
* la relation: N:N

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
voir, 0N Article, 0N Class

Article: title, slug, excerpt, content
ecrire, 0N Teacher, 11 Article
Teacher: username, password, first_name, last_name
creer, 0N Teacher, 11 Class
Class: username, description, password

:
avoir, 0N Teacher, 11 Kanban
consulte, 0N Kanban, 0N Class

Kanban: title, slug, description, background

contenir, 0N Kanban, 11 List

List: name, order
inclure, 0N List, 11 Card
Card: description, color, order
associer, 0N Card, 1N Tag
Tag: name, color

```

## MLD

**article** (<ins>id</ins>,title, slug, excerpt, content, _#user(id)_)  
**teacher** (<ins>id</ins>,username, password, first_name, last_name)  
**m2m_article_class** (<ins>id</ins>,_#article(id)_, _#class(id)_) 
**class** (<ins>id</ins>,username, description, _#teacher(id)_)  
**kanban** (<ins>id</ins>,title, slug, description, background, _#user(id)_)) 
**m2m_kanban_class** (<ins>id</ins>,_#kanban(id)_, _#class(id)_) 
**list** (<ins>id</ins>,name, order, _#kanban(id)_)  
**card** (<ins>id</ins>,description, color, order, _#list(id)_)  
**m2m_card_tag** (<ins>id</ins>,_#card(id)_, _#tag(id_)  
**tag** (<ins>id</ins>,name, color)
