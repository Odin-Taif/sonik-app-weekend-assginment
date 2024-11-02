import { Request, Response } from "express";
import { getUsersFromDb } from "../../utils";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersFromDb();
    res.json({
      success: true,
      msg: "Users fetched successfully",
      users: users,
    });
  } catch (error) {
    res.json({ success: false, msg: { error } });
    throw error;
  }
};
