CREATE TABLE IF NOT EXISTS "posts" (
	"id" varchar PRIMARY KEY NOT NULL,
	"post" text,
	"authorId" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
