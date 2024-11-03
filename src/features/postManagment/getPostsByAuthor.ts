import { Request, Response } from "express";
import { getPostsByUserFromDb } from "../../utils";

export const getPostsByAuthor = async (req: Request, res: Response) => {
  const userId = req.params.authorid;
  try {
    const posts = await getPostsByUserFromDb(userId);
    res.json({
      success: true,
      msg: "User's posts fetched successfully",
      posts: posts,
    });
  } catch (error) {
    res.json({ success: false, msg: { error } });
    throw error;
  }
};
