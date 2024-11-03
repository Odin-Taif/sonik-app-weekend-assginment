import { getUsersFromDb } from "./index";

export const getUserByEmail = async (email: string) => {
  const usersDir = process.env.usersDbDir || "src/db/users";

  const users = await getUsersFromDb(usersDir);
  const user = users.find((user) => user.email === email);
  return user;
};
