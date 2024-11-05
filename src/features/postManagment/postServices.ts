import { Db } from "./postDb";

export function createPostServices(db: Db) {
  async function getPosts() {
    return db.getPostsFromDb();
  }

  return {
    getPosts,
  };
}

export type Service = ReturnType<typeof createPostServices>;
