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
  await db
    .insert(posts)
    .values({
      id,
      content,
      authorId,
    })
    .returning();
};

const deletePostInDb = async (postId: string) => {
  await db.delete(posts).where(eq(posts.id, postId));
};

const getPostsByUserFromDb = async (userId: string) => {
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

export function CreatePostDb() {
  return {
    getPostsFromDb,
    getPostsByUserFromDb,
    deletePostInDb,
    createPostInDb,
  };
}

export type Db = ReturnType<typeof CreatePostDb>;
