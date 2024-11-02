import express from "express";
import { getPosts, createPost, getPost } from "../features/postManagment";

export const postRouter: express.Router = express.Router();
postRouter.post("/post", createPost);
postRouter.get("/posts", getPosts);
postRouter.get("/posts/:id", getPost);
