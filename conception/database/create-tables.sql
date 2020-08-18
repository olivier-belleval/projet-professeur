BEGIN;

CREATE SCHEMA IF NOT EXISTS "omyprof";
CREATE SCHEMA IF NOT EXISTS "article";
CREATE SCHEMA IF NOT EXISTS "kanban";

DROP TABLE IF EXISTS "kanban"."m2m_tag_card";
DROP TABLE IF EXISTS "article"."m2m_article_class";
DROP TABLE IF EXISTS "kanban"."m2m_kanban_class";

DROP TABLE IF EXISTS "article"."article";

DROP TABLE IF EXISTS "kanban"."tag";
DROP TABLE IF EXISTS "kanban"."card";
DROP TABLE IF EXISTS "kanban"."list";
DROP TABLE IF EXISTS "kanban"."kanban";

DROP TABLE IF EXISTS "omyprof"."class";
DROP TABLE IF EXISTS "omyprof"."teacher" ;


-- TABLES DU SCHEMA OMYPROF

CREATE TABLE "omyprof"."teacher" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "username" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT
);

CREATE TABLE "omyprof"."class" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "username" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "description" TEXT,
    "teacher_id" INT REFERENCES "omyprof"."teacher"("id")
);

-- TABLES DU SCHEMA ARTICLE

CREATE TABLE "article"."article" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "teacher_id" INT REFERENCES "omyprof"."teacher"("id")
);

CREATE TABLE "article"."m2m_article_class" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "article_id" INT REFERENCES "article"."article"("id") ON DELETE CASCADE,
    "class_id" INT REFERENCES "omyprof"."class"("id") ON DELETE CASCADE
);

-- TABLES DU SCHEMA KANBAN

CREATE TABLE "kanban"."kanban" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "background" TEXT DEFAULT '#FFFFFF',
    "teacher_id" INT REFERENCES "omyprof"."teacher"("id")
);

CREATE TABLE "kanban"."list" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "order" INT NOT NULL,
    "kanban_id" INT REFERENCES "kanban"."kanban"("id")
);

CREATE TABLE "kanban"."card" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "description" TEXT DEFAULT 'à remplir',
    "order" INT NOT NULL,
    "color" TEXT DEFAULT '#FFFFFF',
    "list_id" INT REFERENCES "kanban"."list"("id")
);

CREATE TABLE "kanban"."tag" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT DEFAULT '#FFFFFF'
);

CREATE TABLE "kanban"."m2m_tag_card" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "tag_id" INT REFERENCES "kanban"."tag"("id"),
    "card_id" INT REFERENCES "kanban"."card"("id")
);

CREATE TABLE "kanban"."m2m_kanban_class" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "kanban_id" INT REFERENCES "kanban"."kanban"("id"),
    "class_id" INT REFERENCES "omyprof"."class"("id")
);


COMMIT;

