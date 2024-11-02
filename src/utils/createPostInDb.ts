import { readdir, writeFile } from "fs/promises";
import { Post } from "../../types";
export const createPostInDb = async (postsDir: string, { id, post }: Post) => {
  const posts = readdir(postsDir);
  await writeFile(`${postsDir}/${id}`, JSON.stringify({ id, post }));
};
