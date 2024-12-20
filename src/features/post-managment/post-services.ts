import { createPostDataSchema, updatePostDataSchema } from "./zod-validation";
import { Db } from "./post-repositroy";
import { PostData, UpdatePostData } from "./types";
import { v4 as uuidv4 } from "uuid";

export function PostServices(db: Db) {
  async function getPosts() {
    return db.getPostsFromDb();
  }

  async function getPostsByUserFromDb(userId: string) {
    return db.getPostsByUserFromDb(userId);
  }

  async function createPost(postData: PostData) {
    const postValidated = createPostDataSchema.safeParse(postData);
    if (!postValidated.success) {
      return { success: false, msg: "Input is invalid" };
    }

    const id = uuidv4();
    const post = { ...postValidated.data, id };

    return db.createPostInDb(post);
  }

  async function updatePost(updatedPostData: UpdatePostData) {
    const postValidated = updatePostDataSchema.safeParse(updatedPostData);
    if (!postValidated.success) {
      return { success: false, msg: "Input is invalid" };
    }
    const { postId, content } = postValidated.data;
    return db.updatePostInDb(postId, content);
  }

  async function deletePost(postId: string) {
    return db.deletePostInDb(postId);
  }

  return {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getPostsByUserFromDb,
  };
}

export type Service = ReturnType<typeof PostServices>;
