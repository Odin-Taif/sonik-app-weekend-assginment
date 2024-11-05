import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostsByAuthor,
} from ".";
import { verifyLogin } from "../../middleware";

export function createPostRouter() {
  const router: express.Router = express.Router();
  router.post("/post", verifyLogin, createPost);
  router.get("/posts", getPosts);
  router.patch("/posts/:id", verifyLogin, updatePost);
  router.delete("/posts/:id", verifyLogin, deletePost);
  router.get("/posts/:authorid", verifyLogin, getPostsByAuthor);

  return router;
}
