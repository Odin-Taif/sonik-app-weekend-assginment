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
exports.getPostsByUserFromDb = void 0;
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const drizzle_orm_1 = require("drizzle-orm");
const getPostsByUserFromDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const postsFromDb = yield db_1.db
        .select({
        id: schema_1.posts.id,
        content: schema_1.posts.content,
        authorId: schema_1.posts.authorId,
        createdAt: schema_1.posts.createdAt,
    })
        .from(schema_1.posts)
        .where((0, drizzle_orm_1.eq)(schema_1.posts.authorId, userId));
    return postsFromDb;
});
exports.getPostsByUserFromDb = getPostsByUserFromDb;
//# sourceMappingURL=getPostsByUserFromDb.js.map