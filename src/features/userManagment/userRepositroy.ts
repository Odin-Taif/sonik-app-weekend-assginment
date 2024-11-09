import { readdir, readFile, writeFile } from "fs/promises";
import { User } from "../../../types";
import { compareSync } from "bcryptjs";
import { generateToken } from "../../utils/generateToken";

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
  const usersDir =
    process.env.usersDbDir || "src/features/userManagment/db/users";
  await writeFile(
    `${usersDir}/${id}`,
    JSON.stringify({ id, name, email, hashedPassword })
  );
  return id;
};

export const loginInDb = async (user: { email: string; password: string }) => {
  const users = await getUsersFromDb();
  const existingUser = users.find((el) => el.email === user.email);
  if (!existingUser) {
    return {
      success: false,
      msg: "User does not exist!",
    };
  }
  const validPassword = compareSync(user.password, existingUser.hashedPassword);
  if (!validPassword) {
    return { success: false, msg: "Incorrect password!" };
  }
  const SECRET_KEY = process.env.SECRET_KEY!;
  const token = await generateToken(existingUser.id, SECRET_KEY);
  return {
    success: true,
    msg: "User logged in successfully",
    user: existingUser,
    token: token,
  };
};

export function CreateUserDb() {
  return {
    getUsersFromDb,
    createUserInDb,
    loginInDb,
  };
}

export type Db = ReturnType<typeof CreateUserDb>;
