import { db } from "../drizzle/db";
import { posts } from "../drizzle/schema";
export const getPostsFromDb = async () => {
  const postsFromDb = await db
    .select({
      id: posts.id,
      content: posts.content,
      authorId: posts.authorId,
      createdAt: posts.createdAt,
    })
    .from(posts);
  return postsFromDb;
};
