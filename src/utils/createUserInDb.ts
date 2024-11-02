import { writeFile } from "fs/promises";
import { User } from "../../types";
export const createNewUserInDb = async (
  usersDir: string,
  { id, name, email, age }: User
) => {
  await writeFile(
    `${usersDir}/${id}`,
    JSON.stringify({ id, name, email, age })
  );
};
