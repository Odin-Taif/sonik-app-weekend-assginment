import express from "express";
import { getPosts, createPost,getPost } from "../controllers/postController";

export const postRouter: express.Router = express.Router();
postRouter.post("/post", createPost);
postRouter.get("/posts", getPosts);
postRouter.get("/posts/:id", getPost);
