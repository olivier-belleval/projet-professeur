-- Deploy omyprof:00-create-tables to pg

BEGIN;

-- SCHEMAS

CREATE SCHEMA "omyprof";
CREATE SCHEMA "article";
CREATE SCHEMA "kanban";

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
    "article_id" INT NOT NULL REFERENCES "article"."article"("id") ON DELETE CASCADE,
    "class_id" INT NOT NULL REFERENCES "omyprof"."class"("id") ON DELETE CASCADE
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
    "description" TEXT,
    "order" INT NOT NULL,
    "color" TEXT DEFAULT '#FFFFFF',
    "list_id" INT NOT NULL REFERENCES "kanban"."list"("id") ON DELETE CASCADE
);

CREATE TABLE "kanban"."tag" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT DEFAULT '#FFFFFF'
);

CREATE TABLE "kanban"."m2m_tag_card" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "tag_id" INT NOT NULL REFERENCES "kanban"."tag"("id") ON DELETE CASCADE,
    "card_id" INT NOT NULL REFERENCES "kanban"."card"("id") ON DELETE CASCADE
);

CREATE TABLE "kanban"."m2m_kanban_class" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "kanban_id" INT NOT NULL REFERENCES "kanban"."kanban"("id") ON DELETE CASCADE,
    "class_id" INT NOT NULL REFERENCES "omyprof"."class"("id") ON DELETE CASCADE
);

COMMIT;
