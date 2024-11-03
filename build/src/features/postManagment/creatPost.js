"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const utils_1 = require("../../utils");
const uuid_1 = require("uuid");
const zod_validation_1 = require("../../validation/zod-validation");
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authorId = req.userId;
    const postValidated = zod_validation_1.createPostSchema.safeParse(req.body);
    if (!postValidated.success) {
        res.status(400).json({ success: false, msg: "Input is invalid" });
        return;
    }
    const id = (0, uuid_1.v4)();
    const { content } = postValidated.data;
    const newPost = { id, content, authorId };
    try {
        yield (0, utils_1.createPostInDb)(newPost);
        res
            .status(201)
            .header("location", `/api/v1/posts/${id}`)
            .json({ success: true, msg: "post created successfully", post: newPost });
    }
    catch (error) {
        res.json({ success: false, msg: "Post is invalid", error: error });
        throw error;
    }
});
exports.createPost = createPost;
//# sourceMappingURL=creatPost.js.map