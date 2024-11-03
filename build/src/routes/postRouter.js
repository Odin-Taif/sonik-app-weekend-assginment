"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = __importDefault(require("express"));
const postManagment_1 = require("../features/postManagment");
const middleware_1 = require("../middleware");
exports.postRouter = express_1.default.Router();
exports.postRouter.post("/post", middleware_1.verifyLogin, postManagment_1.createPost);
exports.postRouter.get("/posts", middleware_1.verifyLogin, postManagment_1.getPosts);
exports.postRouter.patch("/posts/:id", middleware_1.verifyLogin, postManagment_1.updatePost);
exports.postRouter.delete("/posts/:id", middleware_1.verifyLogin, postManagment_1.deletePost);
exports.postRouter.get("/posts/:authorid", middleware_1.verifyLogin, postManagment_1.getPostsByAuthor);
//# sourceMappingURL=postRouter.js.map