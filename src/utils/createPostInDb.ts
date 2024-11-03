import { db } from "../drizzle/db";
import { Post } from "../../types";
import { posts } from "../drizzle/schema";
export const createPostInDb = async ({ id, content, authorId }: Post) => {
  await db
    .insert(posts)
    .values({
      id,
      content,
      authorId,
    })
    .returning();
};
