import { pgTable, serial, varchar, timestamp, text } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  post: text(),
});
