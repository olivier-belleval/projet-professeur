# Data Dictionary

## Teacher

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|id|PK auto-increment unassigned| INT |-| -|
|username|identifiant|TEXT|NOT NULL UNIQUE|-|
|password|password of teacher|TEXT|NOT NULL|-|
|first_name|first name of user|TEXT||-|
|last_name|last name of user|TEXT||-|

## Class

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|id|PK auto-increment unassigned| INT |-| -|
| username |name of role|TEXT|UNIQUE NOT NULL|-|
|description|short description of role|TEXT||-|
|teacher_id|teacher of the class|INT|NOT NULL|-|

## Article

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|id|PK auto-increment unassigned| INT |-| -|
|title|title|TEXT|NOT NULL|-|
|slug|slug of title|TEXT|NOT NULL|-|
|excerpt|short excerpt of the article|TEXT|NOT NULL|-|
|content|content of the article|TEXT|NOT NULL|-|
|teacher_id|references the id of the creator|INT| NOT NULL|-|

## Kanban

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|id|PK auto-increment unassigned| INT |-| -|
|title|title|TEXT|NOT NULL|-|
|slug|slug of title|TEXT|NOT NULL|-|
|description|short description|TEXT|NOT NULL|-|
|background|background color or image | TEXT|DEFAULT('#FFFFF')|-|
|teacher_id|references the id of the creator|INT| NOT NULL|-|

## List

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|id|PK auto-increment unassigned| INT |-| -|
|name|name of the list|TEXT|NOT NULL|-|
|order|order of the list|INT|NOT NULL|-|
|kanban_id|references the kanban|INT|NOT NULL|-|


## Card

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|id|PK auto-increment unassigned| INT |-| -|
|description|-|TEXT|DEFAULT('à remplir')|-|
|order|order of the card in the list|INT|NOT NULL|-|
|color| color of the card|TEXT|DEFAULT('#FFFFF')|-|
|list_id|references the list|INT|NOT NULL|-|

## Tag

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|id|PK auto-increment unassigned| INT |-| -|
|name|tag's name|TEXT|NOT NULL|-|
|color|tag's color|TEXT|DEFAULT('#FFFFF')|-|
