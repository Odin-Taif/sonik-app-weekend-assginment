import { writeFile } from "fs/promises";
import { User } from "../../types";
import "dotenv/config";
export const createNewUserInDb = async (
  { id, name, email, hashedPassword }: User,
  usersDir: string
) => {
  await writeFile(
    `${usersDir}/${id}`,
    JSON.stringify({ id, name, email, hashedPassword })
  );
};
