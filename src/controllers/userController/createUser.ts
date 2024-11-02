import { Request, Response } from "express";
import { writeFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import { User } from "../../../types";

export const createUser = async (req: Request, res: Response) => {
  const id = uuidv4();
  const { name, email, age } = req.body;
  const newUser = { id, name, email, age };
  try {
    await createNewUser(`src/db/users`, newUser);
    res
      .status(201)
      .header("location", `/api/v1/users/${id}`)
      .json({ success: true, msg: "User created successfully", user: newUser });
  } catch (error) {
    res.json({ success: false, msg: "User is invalid", error: error });
    throw error;
  }
};

const createNewUser = async (
  usersDir: string,
  { id, name, email, age }: User
) => {
  await writeFile(
    `${usersDir}/${id}`,
    JSON.stringify({ id, name, email, age })
  );
};
