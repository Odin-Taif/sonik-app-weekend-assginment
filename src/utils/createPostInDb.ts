import { Post } from "../../types";
import { db } from "../drizzle/db";
import { posts } from "../drizzle/schema";
export const createPostInDb = async ({ id, post }: Post) => {
  await db
    .insert(posts)
    .values({
      id,
      post,
    })
    .returning();
};
