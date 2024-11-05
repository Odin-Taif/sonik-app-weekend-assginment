import express, { Router } from "express";
import cookieParser from "cookie-parser";
import { createPostFeature } from "./features/postManagment/postFeature";

export function createApp() {
  const app = express();
  app.use(cookieParser());
  app.use(express.json());
  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });
  const postFeature = createPostFeature();

  const v1Router = Router();
  v1Router.use("/", postFeature.router);

  const apiRouter = Router();
  apiRouter.use("/api/v1", v1Router);

  app.use("/", apiRouter);
  return app;
}
