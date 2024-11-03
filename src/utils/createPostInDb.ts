import { writeFile } from "fs/promises";
import { Post } from "../../types";
export const createPostInDb = async ({ id, post }: Post) => {
  const postsDir = process.env.postsDir || "src/db/posts";
  if (!process.env.usersDbDir) {
    console.warn(
      "Environment variable usersDbDir is not set. Using default path."
    );
  }
  await writeFile(`${postsDir}/${id}`, JSON.stringify({ id, post }));
};
