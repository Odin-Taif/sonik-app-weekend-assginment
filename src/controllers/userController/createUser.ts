import { Request, Response } from "express";
import { mkdir, writeFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";

type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};
export const createUser = async (req: Request, res: Response) => {
  const id = uuidv4();
  const { name, email, age } = req.body;

  try {
    await createNewUser(`src/db/users`, { id, name, email, age });
    res.status(201).header("location", `/api/v1/users/${id}`).json({ id });
  } catch (error) {
    console.log(error);
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
