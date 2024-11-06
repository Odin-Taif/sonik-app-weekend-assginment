import { Db } from "./postDb";

import { Post } from "./types";
export function createPostServices(db: Db) {
  async function getPosts() {
    return db.getPostsFromDb();
  }

  async function createPost(newPost: Post) {
    return db.createPostInDb(newPost);
  }

  return {
    getPosts,
    createPost,
  };
}

export type Service = ReturnType<typeof createPostServices>;
