import { Request, Response } from "express";
import { getUsersFromDb } from "../../utils";

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const users = await getUsersFromDb();
  try {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      res.status(404).end();
    }
    res
      .status(200)
      .json({ status: true, msg: "user fetched successfully", user: user });
  } catch (error) {
    res.json({ status: false, msg: "something went wrong" });
    throw error;
  }
};
