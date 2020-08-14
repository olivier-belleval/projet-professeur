Data Dictionary

### User

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|label|identifiant|TEXT|NOT NULL UNIQUE|-|
|password|password of user|TEXT|NOT NULL|-|
|first_name|first name of user|TEXT||-|
|last_name|last name of user|TEXT||-|

### Role

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
| label |name of role|TEXT|UNIQUE NOT NULL|-|
|description|short description of role|TEXT||-|

### Article

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|title|title|TEXT|NOT NULL|-|
|slug|slug of title|TEXT|NOT NULL|-|
|excerpt|short excerpt of the article|TEXT|NOT NULL|-|
|content|content of the article|TEXT|NOT NULL|-|
|user_id|references the id of the creator|INT| NOT NULL|-|

### Kanban

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|title|title|TEXT|NOT NULL|-|
|slug|slug of title|TEXT|NOT NULL|-|
|description|short description|TEXT|NOT NULL|-|
|background|background color or image | TEXT|DEFAULT('#FFFFF')|-|
|user_id|references the id of the creator|INT| NOT NULL|-|

### List

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|name|name of the list|TEXT|NOT NULL|-|
|order|order of the list|INT|NOT NULL|-|
|kanban_id|references the kanban|INT|NOT NULL|-|


### Card

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|description|-|TEXT|DEFAULT('à remplir')|-|
|order|order of the card in the list|INT|NOT NULL|-|
|color| color of the card|TEXT|DEFAULT('#FFFFF')|-|
|list_id|references the list|INT|NOT NULL|-|

### Tag

|Name|Description|Type|Constraint|Comment|
|-|-|-|-|-|
|name|tag's name|TEXT|NOT NULL|-|
|color|tag's color|TEXT|DEFAULT('#FFFFF')|-|
