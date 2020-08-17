BEGIN;

-- suppression des lignes dans les tables existantes

TRUNCATE "kanban"."m2m_tag_card",
"article"."m2m_article_class",
"kanban"."m2m_kanban_class",
"article"."article",
"kanban"."tag",
"kanban"."card",
"kanban"."list",
"kanban"."kanban",
"omyprof"."class",
"omyprof"."teacher"
RESTART IDENTITY;

-- teacher
INSERT INTO "omyprof"."teacher" ("username", "password", "first_name", "last_name") VALUES
('admin', 'admin', 'Jules', 'Ferry');

-- class
INSERT INTO "omyprof"."class" ("username", "description", "password", "teacher_id") VALUES
('6eme A', 'La classe de 6eme A', 'pwd1', 1),
('5eme B', 'La classe de 5eme B', 'pwd2', 1),
('Terminale ES 2', 'La classe de Terminale ES 2', 'pwd3', 1),
('test-bcrypt', 'test', '$2b$09$9uK0.7vddDcGlON75CdemefjibJDLKe.oE6HolH0qVXNTWOg1OrW6', 1);

-- article
INSERT INTO "article"."article" ("title", "slug", "excerpt", "content", "teacher_id") VALUES
('Article test', 'article-test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas pretium nunc, quis pulvinar est elementum egestas. Nunc eu ornare odio. In hac habitasse platea dictumst. Morbi feugiat dolor sit amet viverra volutpat. Ut consequat tristique efficitur. Cras bibendum est vel volutpat fermentum. Nam eu mollis tortor. Sed egestas leo.', 1),
('Article test 2', 'article-test-2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas pretium nunc, quis pulvinar est elementum egestas. Nunc eu ornare odio. In hac habitasse platea dictumst. Morbi feugiat dolor sit amet viverra volutpat. Ut consequat tristique efficitur. Cras bibendum est vel volutpat fermentum. Nam eu mollis tortor. Sed egestas leo.', 1),
('Article test 3', 'article-test-3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas pretium nunc, quis pulvinar est elementum egestas. Nunc eu ornare odio. In hac habitasse platea dictumst. Morbi feugiat dolor sit amet viverra volutpat. Ut consequat tristique efficitur. Cras bibendum est vel volutpat fermentum. Nam eu mollis tortor. Sed egestas leo.', 1);

-- kanban
INSERT INTO "kanban"."kanban" ("title", "slug", "description", "background", "teacher_id") VALUES
('Planning de l''apothéose', 'planning-de-l-apotheose', 'Planning de l''apothéose sur 4 semaines', '#f0f', 1);

-- lists
INSERT INTO "kanban"."list" ("name", "order", "kanban_id") VALUES
('Sprint 0', 1, 1),
('Sprint 1', 2, 1),
('Sprint 2', 3, 1),
('Sprint 3', 4, 1);

--cards
INSERT INTO "kanban"."card" ("description", "order", "list_id") VALUES
('Conception', 1, 1),
('Répartition des rôles', 1, 1),
('On code, enfin!', 1, 2);

--tags
INSERT INTO "kanban"."tag" ("name", "color") VALUES
('Urgent', '#ff3333'),
('Soon', '#00cc00');

-- m2m article <> class
INSERT INTO "article"."m2m_article_class" ("article_id", "class_id") VALUES
(1, 1),
(2,2),
(2,1),
(3,3);

-- m2m kanban <> class
INSERT INTO "kanban"."m2m_kanban_class" ("kanban_id", "class_id") VALUES
(1, 1);

-- m2m tag <> card
INSERT INTO "kanban"."m2m_tag_card" ("tag_id", "card_id") VALUES
(1, 1),
(2, 3);


COMMIT;