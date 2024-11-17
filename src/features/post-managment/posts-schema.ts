import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: varchar("id").primaryKey(),
  content: text("post"),
  authorId: varchar("authorId").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
