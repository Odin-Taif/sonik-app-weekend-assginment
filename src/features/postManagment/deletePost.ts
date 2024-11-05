import { Request, Response } from "express";
import { deletePostInDb } from "../../utils";

export const deletePost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  try {
    await deletePostInDb(postId);
    res.status(204).send();
  } catch (error) {
    res.json({ success: false, msg: "Resource not found", error: error });
    throw error;
  }
};
