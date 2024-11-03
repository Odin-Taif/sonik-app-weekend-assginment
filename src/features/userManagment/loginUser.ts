import { Request, Response } from "express";
import { signinUserSchema } from "../../validation/zod-validation";
import { generateToken, getUserByEmail, setTokenCookie } from "../../utils";
import { compareSync } from "bcryptjs";

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
    const validPassword = compareSync(password, existingUser.hashedPassword);

    if (!validPassword) {
      res.status(400).json({ success: false, msg: "Incorrect password!" });
    }
    const SECRET_KEY = process.env.SECRET_KEY!;
    const token = await generateToken(existingUser.id, SECRET_KEY);
    setTokenCookie(res, token);

    res.status(200).json({
      success: true,
      msg: "User logged in successfully",
      user: existingUser,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
};
