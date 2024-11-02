import express from "express";
import { getPosts, createPost } from "../controllers/postController";

export const postRouter: express.Router = express.Router();
postRouter.get("/posts", getPosts);
postRouter.post("/post", createPost);
