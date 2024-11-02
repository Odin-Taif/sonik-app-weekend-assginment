import { Request, Response } from "express";
import { getUsersFromDb } from "../../utils";

export const getUsers = async (req: Request, res: Response) => {
  const usersDir = "src/db/users";
  try {
    const users = await getUsersFromDb(usersDir);
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
