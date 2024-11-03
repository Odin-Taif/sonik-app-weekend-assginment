import { db } from "../drizzle/db";
import { posts } from "../drizzle/schema";
import { Post } from "../../types";
export const getPostsFromDb = async () => {
  const postsFromDb = await db
    .select({
      id: posts.id,
      post: posts.post,
    })
    .from(posts);
  return postsFromDb;
};
