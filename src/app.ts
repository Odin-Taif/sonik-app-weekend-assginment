import express from "express";
import cookieParser from "cookie-parser";
import { createPostRouter } from "./features/postManagment/postRouter";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.json());
  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });
  // app.use("/api/v1", userRouter);
  app.use("/api/v1", createPostRouter.router);

  return app;
}
