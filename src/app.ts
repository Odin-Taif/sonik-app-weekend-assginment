import express from "express";
import { userFeatures } from "./features";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  const userFeaturesObj = userFeatures();

  app.use("/api/v1/user", userFeaturesObj.getRouter());

  return app;
}
