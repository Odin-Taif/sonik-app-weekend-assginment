import { Request, Response } from "express";
import { getPostsFromDb } from "../../utils";

export const getPost = async (req: Request, res: Response) => {
  const postId = req.params.id;

  const posts = await getPostsFromDb();
  try {
    const post = posts.find((post) => post.id === postId);
    if (!post) {
      res.status(404).end();
    }
    res
      .status(200)
      .json({ status: true, msg: "post fetched successfully", post: post });
  } catch (error) {
    res.json({ status: false, msg: "something went wrong" });
    throw error;
  }
};
