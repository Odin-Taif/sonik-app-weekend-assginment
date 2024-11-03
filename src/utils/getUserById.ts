import { getUsersFromDb } from "./index";

export const getUserById = async (userID: string) => {
  const usersDir = process.env.usersDbDir || "src/db/users";
  const users = await getUsersFromDb(usersDir);
  const user = users.find((user) => user.id === userID);
  return user;
};
