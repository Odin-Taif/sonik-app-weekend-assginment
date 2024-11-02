import { readdir, readFile } from "fs/promises";
export const getUsersFromDb = async () => {
  const usersDir = process.env.usersDbDir || "src/db/users";
  if (!process.env.usersDbDir) {
    console.warn(
      "Environment variable usersDbDir is not set. Using default path."
    );
  }
  const files = await readdir(usersDir);
  const usersPromises = await Promise.allSettled(
    files.map(async (file: any) => {
      const content = await readFile(`${usersDir}/${file}`, "utf-8");
      return JSON.parse(content);
    })
  );
  const users = usersPromises
    .filter((result) => result.status === "fulfilled")
    .map((result) => (result as PromiseFulfilledResult<any>).value);

  return users;
};
