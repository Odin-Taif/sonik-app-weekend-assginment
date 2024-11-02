import e, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { hashSync } from "bcryptjs";
import { createNewUserInDb } from "../../utils";
import { createUserSchema } from "../../validation/zod-validation";

export const createUser = async (req: Request, res: Response) => {
  const userValidated = createUserSchema.safeParse(req.body);
  if (!userValidated.success) {
    res.status(400).json({ success: false, message: "Input not valid!" });
  }
  const id = uuidv4();
  const { name, email, password } = userValidated.data!;
  const hashedPassword = hashSync(password, 10);

  try {
    const newUser = { id, name, email, hashedPassword };
    await createNewUserInDb(newUser);
    res
      .status(201)
      .header("location", `/api/v1/users/${id}`)
      .json({ success: true, msg: "User created successfully", user: newUser });
  } catch (error) {
    res.json({ success: false, msg: "User is invalid", error: error });
    throw error;
  }
};
