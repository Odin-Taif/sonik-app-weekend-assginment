import { Request, Response } from "express";
import { createPostInDb } from "../../utils";
import { v4 as uuidv4 } from "uuid";
import { createPostSchema } from "../../validation/zod-validation";

export const createPost = async (req: Request, res: Response) => {
  const postValidated = createPostSchema.safeParse(req.body);
  if (!postValidated.success) {
    res.status(400).json({ success: false, msg: "Input is invalid" });
    return;
  }
  const id = uuidv4();
  const { post } = postValidated.data;
  const newPost = { id, post };
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
