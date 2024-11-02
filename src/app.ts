import express from "express";
import { userRouter } from "./routes/userRouter/userRouter";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  app.use("/api/v1", userRouter);

  return app;
}
