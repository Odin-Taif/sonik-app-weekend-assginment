import { readdir, writeFile } from "fs/promises";
import { Post } from "../../types";
export const createPostInDb = async ({ id, post }: Post) => {
  const postsDir = process.env.usersDbDir || "src/db/posts";
  if (!process.env.usersDbDir) {
    console.warn(
      "Environment variable usersDbDir is not set. Using default path."
    );
  }
  const posts = readdir(postsDir);
  await writeFile(`${postsDir}/${id}`, JSON.stringify({ id, post }));
};
