import express from "express";
import { v4 as uuidv4 } from "uuid";
// import {
//   getPosts,
//   createPost,
//   updatePost,
//   deletePost,
//   getPostsByAuthor,
// } from ".";
// import { verifyLogin } from "../../middleware";

import { Service } from "./postServices";
import { createPostSchema } from "../../validation/zod-validation";

export function createPostRouter(service: Service) {
  const router: express.Router = express.Router();

  router.get("/posts", async (req, res) => {
    res.json(await service.getPosts());
  });

  router.post("/post", async (req, res) => {
    try {
      // as Marcus about the validation layer. where should be included.
      const postValidated = createPostSchema.safeParse(req.body);
      if (!postValidated.success) {
        res.status(400).json({ success: false, msg: "Input is invalid" });
        return;
      }

      const authorId = "fasdfjasdfkjaldfjkaldfkj"; // Placeholder
      const id = uuidv4();
      const { content } = postValidated.data;
      const newPost = { id, content, authorId };

      const post = await service.createPost(newPost);
      if (!post) {
        res.status(500).json({ success: false, msg: "Post creation failed" });
      }

      res.status(201).json(post);
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ success: false, msg: "Internal server error" });
    }

    // const authorId = (req as any).userId;
  });
  // router.patch("/posts/:id", verifyLogin, updatePost);
  // router.delete("/posts/:id", verifyLogin, deletePost);
  // router.get("/posts/:authorid", verifyLogin, getPostsByAuthor);

  return router;
}
