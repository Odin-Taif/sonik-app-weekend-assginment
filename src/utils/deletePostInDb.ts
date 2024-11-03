import { eq } from "drizzle-orm";
import { db } from "../drizzle/db";
import { posts } from "../drizzle/schema";

export const deletePostInDb = async (postId: string) => {
  await db.delete(posts).where(eq(posts.id, postId));
};
