import { Request, Response } from "express";
import { getUserById } from "../../utils";

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await getUserById(userId);
  try {
    if (!user) {
      res.status(404).end();
    }
    res
      .status(200)
      .json({ success: true, msg: "user fetched successfully", user: user });
  } catch (error) {
    res.json({ success: false, msg: "something went wrong" });
    throw error;
  }
};
