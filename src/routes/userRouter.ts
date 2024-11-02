import express from "express";
import { getUser, getUsers, createUser } from "../controllers/userController";

export const userRouter: express.Router = express.Router();
userRouter.post("/user", createUser);
userRouter.get("/users", getUsers);
userRouter.get("/users/:id", getUser);
