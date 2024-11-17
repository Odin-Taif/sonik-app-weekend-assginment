import express, { Router } from "express";
import cookieParser from "cookie-parser";
import { createPostFeature } from "./features/post-managment";
import { createUserFeature } from "./features/user-managment";

export function createApp() {
  const app = express();
  app.use(cookieParser());
  app.use(express.json());

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });
  const postFeature = createPostFeature();
  const userFeature = createUserFeature();

  const v1Router = Router();
  v1Router.use("/", postFeature.router);
  v1Router.use("/", userFeature.router);

  const apiRouter = Router();
  apiRouter.use("/api/v1", v1Router);

  app.use("/", apiRouter);
  return app;
}
