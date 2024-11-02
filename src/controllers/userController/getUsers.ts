import { Request, Response } from "express";
export const getUsers = (req: Request, res: Response) => {
  res.json({ success: true, msg: "Users fetched successfully" });
};
