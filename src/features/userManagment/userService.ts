import { User } from "../../../types";
import { createUserSchema } from "../../validation/zod-validation";
import { Db } from "./userDb";
import { v4 as uuidv4 } from "uuid";
import { hashSync } from "bcryptjs";

export function UserServices(db: Db) {
  async function getUsers() {
    return db.getUsersFromDb();
  }

  async function createUser(user: User) {
    const userValidated = createUserSchema.safeParse(user);
    if (!userValidated.success) {
      return { success: false, message: "Input not valid!" };
    }
    const id = uuidv4();
    const { password } = userValidated.data!;
    const hashedPassword = hashSync(password, 10);
    return db.createUserInDb({ ...userValidated.data, id, hashedPassword });
  }

  return {
    getUsers,
    createUser,
  };
}

export type Service = ReturnType<typeof UserServices>;
