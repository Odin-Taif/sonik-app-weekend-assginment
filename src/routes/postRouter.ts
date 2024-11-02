import express from "express";
import { getPosts, createPost, getPost } from "../features/postManagment";
import { verifyLogin } from "../middleware";

export const postRouter: express.Router = express.Router();
postRouter.post("/post", verifyLogin, createPost);
postRouter.get("/posts", getPosts);
postRouter.get("/posts/:id", getPost);
