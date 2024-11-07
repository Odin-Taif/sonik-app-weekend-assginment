import { readdir, readFile } from "fs/promises";

const getUsersFromDb = async () => {
  const usersDir = process.env.usersDbDir || "src/db/users";
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

export function CreateUserDb() {
  return {
    getUsersFromDb,
  };
}

export type Db = ReturnType<typeof CreateUserDb>;
