import { Request, Response } from "express";

export const createPost = async (req: Request, res: Response) => {
  const { post } = req.body;
  res.status(201).json({ status: true, post: post });
};
