import { Request, Response } from "express";
import { getPostsFromDb } from "../../utils";

export const getPosts = async (req: Request, res: Response) => {
  const postsDir = "src/db/posts";
  try {
    const posts = await getPostsFromDb(postsDir);
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
