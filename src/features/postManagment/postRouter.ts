import express from "express";
// import {
//   getPosts,
//   createPost,
//   updatePost,
//   deletePost,
//   getPostsByAuthor,
// } from ".";
// import { verifyLogin } from "../../middleware";

import { Service } from "./postServices";

export function createPostRouter(service: Service) {
  const router: express.Router = express.Router();
  router.get("/posts", async (req, res) => {
    res.json(await service.getPosts());
  });
  // router.post("/post", verifyLogin, createPost);
  // router.patch("/posts/:id", verifyLogin, updatePost);
  // router.delete("/posts/:id", verifyLogin, deletePost);
  // router.get("/posts/:authorid", verifyLogin, getPostsByAuthor);

  return router;
}
