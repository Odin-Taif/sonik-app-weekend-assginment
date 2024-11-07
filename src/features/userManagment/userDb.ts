import { readdir, readFile, writeFile } from "fs/promises";
import { User } from "../../../types";

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

export const createUserInDb = async (user: User) => {
  const { id, name, email, hashedPassword } = user;
  const usersDir = process.env.usersDbDir || "src/db/users";
  await writeFile(
    `${usersDir}/${id}`,
    JSON.stringify({ id, name, email, hashedPassword })
  );
};

export function CreateUserDb() {
  return {
    getUsersFromDb,
    createUserInDb,
  };
}

export type Db = ReturnType<typeof CreateUserDb>;
