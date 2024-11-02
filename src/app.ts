import express from "express";
import { postRouter, userRouter } from "./routes";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  app.use("/api/v1", userRouter);
  app.use("/api/v1", postRouter);

  return app;
}
