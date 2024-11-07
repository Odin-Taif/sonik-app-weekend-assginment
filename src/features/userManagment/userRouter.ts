import express from "express";
import { Service } from "./userService";
import { v4 as uuidv4 } from "uuid";

export function createUserRouter(service: Service) {
  const router: express.Router = express.Router();

  router.get("/users", async (req, res) => {
    try {
      res.json(await service.getUsers());
    } catch (error) {
      res.json({ success: false, msg: { error } });
      throw error;
    }
  });

  router.post("/user", async (req, res) => {
    try {
      const id = uuidv4();
      const user = req.body;
      await service.createUser(user);
      res.status(201).header("location", `/api/v1/users/${id}`).json({
        success: true,
        msg: "User created successfully",
      });
    } catch (error) {
      res.json({ success: false, msg: "User is invalid", error: error });
      throw error;
    }
  });

  router.post("/login", async (req, res) => {
    try {
      const user = req.body;
      res.status(200).json(await service.loginUser(user));
    } catch (error) {
      res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
  });

  return router;
}
