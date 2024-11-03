import { db } from "../drizzle/db";
import { posts } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export const getPostsByUserFromDb = async (userId: string) => {
  const postsFromDb = await db
    .select({
      id: posts.id,
      content: posts.content,
      authorId: posts.authorId,
      createdAt: posts.createdAt,
    })
    .from(posts)
    .where(eq(posts.authorId, userId));
  return postsFromDb;
};
