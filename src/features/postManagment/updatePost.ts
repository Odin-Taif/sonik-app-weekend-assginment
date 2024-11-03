import { Request, Response } from "express";
import { db } from "../../drizzle/db";
import { posts } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

export const updatePost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const postContent = req.body.post;
  try {
    const post = await db
      .update(posts)
      .set({ content: postContent })
      .where(eq(posts.id, postId));
    res
      .status(200)
      .json({ status: true, msg: "Post updated successfully", data: post });
  } catch (error) {
    res.json({ status: false, msg: "something went wrong" });
    throw error;
  }
};
