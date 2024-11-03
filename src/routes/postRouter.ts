import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../features/postManagment";
import { verifyLogin } from "../middleware";

export const postRouter: express.Router = express.Router();
postRouter.post("/post", verifyLogin, createPost);
postRouter.patch("/posts/:id", verifyLogin, updatePost);
postRouter.delete("/posts/:id", verifyLogin, deletePost);
postRouter.get("/posts", getPosts);
