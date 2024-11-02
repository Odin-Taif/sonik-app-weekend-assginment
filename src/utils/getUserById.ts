import { getUsersFromDb } from "./index";

export const getUserById = async (userID: string) => {
  const users = await getUsersFromDb();
  const user = users.find((user) => user.id === userID);
  return user;
};
