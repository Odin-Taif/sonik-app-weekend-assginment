import express from "express";
import { getAllUsers, getUser } from "../../controllers/usersController";

const userRouter: express.Router = express.Router();
userRouter.get("/users", getAllUsers);
userRouter.get("/users/:id", getUser);

export default userRouter;
