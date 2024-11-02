import { Request, Response } from "express";
import { signinUserSchema } from "../../validation/zod-validation";
import { getUserByEmail } from "../../utils";

export const login = async (req: Request, res: Response) => {
  const userValidated = signinUserSchema.safeParse(req.body);

  if (!userValidated.success) {
    res.status(400).json({
      success: false,
      msg: "Please check your Email or Password!",
    });
  }

  try {
    const { email, password } = userValidated.data!;
    const existingUser = await getUserByEmail(email);
    if (!existingUser.length) {
      return res.status(400).json({
        success: false,
        msg: "User does not exist!",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, msg: "Internal Server Error" });
    throw error;
  }
};
