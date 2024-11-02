import { Request, Response } from "express";
import { signinUserSchema } from "../../validation/zod-validation";
import { getUserByEmail } from "../../utils";

export const loginUser = async (req: Request, res: Response) => {
  const userValidated = signinUserSchema.safeParse(req.body);
  if (!userValidated.success) {
    res.status(400).json({
      success: false,
      msg: "Please check your Email or Password!",
    });
  }
  const { email, password } = userValidated.data!;
  try {
    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      res.status(400).json({
        success: false,
        msg: "User does not exist!",
      });
    }
    res.status(200).json({
      success: true,
      msg: "User logged in successfully",
      user: existingUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Internal Server Error" });
    throw error;
  }
};
