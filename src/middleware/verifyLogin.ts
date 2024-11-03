import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const verifyLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({
      success: false,
      msg: "Unauthorized user! Please log in first!",
    });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY!);
    if (!decodedToken) {
      res
        .status(403)
        .json({ success: false, message: "Invalid Token provied" });
    }

    (req as any).userId = (decodedToken as { userId: string }).userId;
    next();
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server Error" });
    throw error;
  }
};
