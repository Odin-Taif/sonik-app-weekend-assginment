import { Request, Response } from "express";
import { writeFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import { User } from "../../../../types";

export const createUser = async (req: Request, res: Response) => {
  const id = uuidv4();
  const { name, email, age } = req.body;
  try {
    await createNewUser(`src/db/users`, { id, name, email, age });
    res
      .status(201)
      .header("location", `/api/v1/users/${id}`)
      .json({ id })
      .json({ success: true, msg: "User created successfully" });
  } catch (error) {
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
