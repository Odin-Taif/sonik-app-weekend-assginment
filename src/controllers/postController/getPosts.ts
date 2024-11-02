import { Request, Response } from "express";
import { getPostsFromDb } from "../../utils";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await getPostsFromDb();
    res.json({
      success: true,
      msg: "Posts fetched successfully",
      posts: posts,
    });
  } catch (error) {
    res.json({ success: false, msg: { error } });
    throw error;
  }
};
