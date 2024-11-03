"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userManagment_1 = require("../features/userManagment");
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/user", userManagment_1.createUser);
exports.userRouter.post("/login", userManagment_1.loginUser);
exports.userRouter.get("/users", userManagment_1.getUsers);
exports.userRouter.get("/users/:id", userManagment_1.getUser);
//# sourceMappingURL=userRouter.js.map