import { getUsersFromDb } from "./index";

export const getUserByEmail = async (email: string) => {
  const users = await getUsersFromDb();
  const user = users.find((user) => user.email === email);
  return user;
};
