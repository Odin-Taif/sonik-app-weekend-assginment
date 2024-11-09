import express from "express";
import { Service } from "./userService";
import { v4 as uuidv4 } from "uuid";
import { setTokenCookie } from "../../utils";

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
      const data = req.body;
      const userId = await service.createUser(data);

      res.status(201).header("location", `/api/v1/users/${id}`).json({
        success: true,
        msg: "User created successfully",
        userId: userId,
      });
    } catch (error) {
      res.json({ success: false, msg: "User is invalid", error: error });
      throw error;
    }
  });
  router.post("/login", async (req, res) => {
    try {
      const data = req.body;
      const user = await service.loginUser(data);
      if ("token" in user) {
        setTokenCookie(res, user.token!);
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
  });

  return router;
}
