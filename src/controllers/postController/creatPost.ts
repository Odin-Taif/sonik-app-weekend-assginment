import { Request, Response } from "express";
import { createPostInDb } from "../../utils";
import { v4 as uuidv4 } from "uuid";

export const createPost = async (req: Request, res: Response) => {
  const id = uuidv4();
  const { post } = req.body;
  const postsDbDir = "./src/db/posts";
  const newPost = { id, post };
  try {
    await createPostInDb(postsDbDir, newPost);
    res
      .status(201)
      .header("location", `/api/v1/posts/${id}`)
      .json({ success: true, msg: "post created successfully", post: newPost });
  } catch (error) {
    res.json({ success: false, msg: "Post is invalid", error: error });
    throw error;
  }
};
