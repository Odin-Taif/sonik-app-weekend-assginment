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
exports.updatePost = void 0;
const db_1 = require("../../drizzle/db");
const schema_1 = require("../../drizzle/schema");
const drizzle_orm_1 = require("drizzle-orm");
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.params.id;
    const postContent = req.body.content;
    try {
        yield db_1.db
            .update(schema_1.posts)
            .set({ content: postContent })
            .where((0, drizzle_orm_1.eq)(schema_1.posts.id, postId));
        res.status(200).json({ success: true, msg: "Post updated successfully" });
    }
    catch (error) {
        res.json({ success: false, msg: "something went wrong" });
        throw error;
    }
});
exports.updatePost = updatePost;
//# sourceMappingURL=updatePost.js.map