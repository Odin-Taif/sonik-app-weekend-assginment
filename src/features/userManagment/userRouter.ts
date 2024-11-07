import express from "express";

import { Service } from "./userService";
import { createUser } from "./createUser";
export function createUserRouter(service: Service) {
  const router: express.Router = express.Router();
  router.get("/users", async (req, res) => {
    try {
      const users = await service.getUsers();
      res.json({
        success: true,
        msg: "Users fetched successfully",
        users: users,
      });
    } catch (error) {
      res.json({ success: false, msg: { error } });
      throw error;
    }
    res.status(200);
  });

  router.post("/user", createUser);
  // router.post("/login", loginUser);
  // router.get("/users/:id", getUser);

  return router;
}
