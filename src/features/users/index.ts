import express from "express";
import { getAllUsers, getUser } from "../../controllers";
export function usersFeatures() {
  return {
    getUsersRouter() {
      const userRouter: express.Router = express.Router();
      userRouter.get("/users", getAllUsers);
      userRouter.get("/users/:id", getUser);
      // userRouter.post("/", signup);
      // userRouter.post("/", login);
      return userRouter;
    },
  };
}
