import { readdir, readFile } from "fs/promises";
export const getPostsFromDb = async (postsDir: string) => {
  const files = await readdir(postsDir);
  const postsPromises = await Promise.allSettled(
    files.map(async (file: any) => {
      const content = await readFile(`${postsDir}/${file}`, "utf-8");
      return JSON.parse(content);
    })
  );
  const posts = postsPromises
    .filter((result) => result.status === "fulfilled")
    .map((result) => (result as PromiseFulfilledResult<any>).value);

  return posts;
};
