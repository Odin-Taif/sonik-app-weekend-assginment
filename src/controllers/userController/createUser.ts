import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { createNewUserInDb } from "../../utils";

export const createUser = async (req: Request, res: Response) => {
  const id = uuidv4();
  const { name, email, age } = req.body;
  const newUser = { id, name, email, age };
  try {
    await createNewUserInDb(`src/db/users`, newUser);
    res
      .status(201)
      .header("location", `/api/v1/users/${id}`)
      .json({ success: true, msg: "User created successfully", user: newUser });
  } catch (error) {
    res.json({ success: false, msg: "User is invalid", error: error });
    throw error;
  }
};
