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
exports.createPostInDb = void 0;
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const createPostInDb = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, content, authorId }) {
    yield db_1.db
        .insert(schema_1.posts)
        .values({
        id,
        content,
        authorId,
    })
        .returning();
});
exports.createPostInDb = createPostInDb;
//# sourceMappingURL=createPostInDb.js.map