import express from "express";
import { usersFeatures } from "./features";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  const users = usersFeatures();
  app.use("/api/v1", users.getUsersRouter());

  return app;
}
