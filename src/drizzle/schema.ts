import { pgTable, text, varchar } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: varchar("id").primaryKey(),
  post: text("post"),
});
