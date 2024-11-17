import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

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
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new Error("SECRET_KEY is not defined in environment variables.");
    }
    const decodedToken = jwt.verify(token, secretKey);
    if (!decodedToken) {
      res
        .status(403)
        .json({ success: false, message: "Invalid Token provided" });
    }
    req.body.userId = (decodedToken as jwt.JwtPayload).userId;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(500).json({ success: false, msg: "Server Error" });
  }
};
