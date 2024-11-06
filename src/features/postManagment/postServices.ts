import { createPostDataSchema } from "../../validation/zod-validation";
import { Db } from "./postDb";
import { PostData } from "./types";
import { v4 as uuidv4 } from "uuid";

export function PostServices(db: Db) {
  async function getPosts() {
    return db.getPostsFromDb();
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
  return {
    getPosts,
    createPost,
  };
}

export type Service = ReturnType<typeof PostServices>;
