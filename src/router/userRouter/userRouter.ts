import express from "express";
import { getUser, getUsers } from "../../controllers/userController";

export const userRouter: express.Router = express.Router();
userRouter.get("/users", getUsers);
userRouter.get("/users/:id", getUser);
