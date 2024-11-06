import express from "express";

import { Service } from "./postServices";

export function createPostRouter(service: Service) {
  const router: express.Router = express.Router();

  router.get("/posts", async (req, res) => {
    res.json(await service.getPosts());
  });

  router.post("/post", async (req, res) => {
    try {
      const content = req.body.content as string;
      // const authorId = (req as any).userId;
      const authorId = "fasdfasdfadfasdfasdfasdfa"; //placeholder
      const postData = { content, authorId };

      const post = await service.createPost(postData);
      if (!post) {
        res.status(500).json({ success: false, msg: "Post creation failed" });
      }
      res.status(201).json(post);
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ success: false, msg: "Internal server error" });
    }
  });

  router.patch("/posts/:id", async (req, res) => {
    try {
      const content = req.body.content;
      const postId = req.params.id;
      const updatedPostData = { postId, content };
      const post = await service.updatePost(updatedPostData);
      if (!post) {
        res.status(500).json({ success: false, msg: "Post updating failed" });
      }
      res.status(200).json({ success: true, msg: "Post updated successfully" });
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ success: false, msg: "Internal server error" });
    }
  });
  // router.delete("/posts/:id", verifyLogin, deletePost);
  // router.get("/posts/:authorid", verifyLogin, getPostsByAuthor);

  return router;
}
