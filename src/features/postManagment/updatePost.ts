import { Request, Response } from "express";
import { db } from "../../drizzle/db";
import { posts } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

export const updatePost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const postContent = req.body.content;
  try {
    await db
      .update(posts)
      .set({ content: postContent })
      .where(eq(posts.id, postId));
    res.status(200).json({ success: true, msg: "Post updated successfully" });
  } catch (error) {
    res.json({ success: false, msg: "something went wrong" });
    throw error;
  }
};
