import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { createPostSchema } from "../../validation/zod-validation";
import { createPostInDb } from "./postDb";

export const createPost = async (req: Request, res: Response) => {
  const authorId = (req as any).userId;
  const postValidated = createPostSchema.safeParse(req.body);
  if (!postValidated.success) {
    res.status(400).json({ success: false, msg: "Input is invalid" });
    return;
  }
  const id = uuidv4();
  const { content } = postValidated.data;
  const newPost = { id, content, authorId };
  try {
    await createPostInDb(newPost);
    res
      .status(201)
      .header("location", `/api/v1/posts/${id}`)
      .json({ success: true, msg: "post created successfully", post: newPost });
  } catch (error) {
    res.json({ success: false, msg: "Post is invalid", error: error });
    throw error;
  }
};
