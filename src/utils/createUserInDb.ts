import { writeFile } from "fs/promises";
import { User } from "../../types";
import "dotenv/config";
export const createNewUserInDb = async ({
  id,
  name,
  email,
  password,
}: User) => {
  const usersDir = process.env.usersDbDir || "src/db/users";
  if (!process.env.usersDbDir) {
    console.warn(
      "Environment variable usersDbDir is not set. Using default path."
    );
  }
  console.log(usersDir);
  await writeFile(
    `${usersDir}/${id}`,
    JSON.stringify({ id, name, email, password })
  );
};
