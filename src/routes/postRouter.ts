import express from "express";
import { getPosts } from "../controllers/postController";

export const postRouter: express.Router = express.Router();
postRouter.get("/posts", getPosts);
