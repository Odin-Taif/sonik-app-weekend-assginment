import { eq } from "drizzle-orm";
import { db } from "../../drizzle/db";
import { posts } from "../../drizzle/schema";
import { Post } from "./types";

const getPostsFromDb = async () => {
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

const createPostInDb = async ({ id, content, authorId }: Post) => {
  return await db
    .insert(posts)
    .values({
      id,
      content,
      authorId,
    })
    .returning();
};

export const updatePostInDb = async (postId: string, content: string) => {
  return await db
    .update(posts)
    .set({ content: content })
    .where(eq(posts.id, postId))
    .returning();
};

const deletePostInDb = async (postId: string) => {
  return await db.delete(posts).where(eq(posts.id, postId)).returning();
};

const getPostsByUserFromDb = async (userId: string) => {
  return await db
    .select({
      id: posts.id,
      content: posts.content,
      authorId: posts.authorId,
      createdAt: posts.createdAt,
    })
    .from(posts)
    .where(eq(posts.authorId, userId));
};

export function CreatePostDb() {
  return {
    getPostsFromDb,
    getPostsByUserFromDb,
    deletePostInDb,
    createPostInDb,
    updatePostInDb,
  };
}

export type Db = ReturnType<typeof CreatePostDb>;
