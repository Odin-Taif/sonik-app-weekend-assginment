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
exports.getUsersFromDb = void 0;
const promises_1 = require("fs/promises");
const getUsersFromDb = (usersDir) => __awaiter(void 0, void 0, void 0, function* () {
    const files = yield (0, promises_1.readdir)(usersDir);
    const usersPromises = yield Promise.allSettled(files.map((file) => __awaiter(void 0, void 0, void 0, function* () {
        const content = yield (0, promises_1.readFile)(`${usersDir}/${file}`, "utf-8");
        return JSON.parse(content);
    })));
    const users = usersPromises
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);
    return users;
});
exports.getUsersFromDb = getUsersFromDb;
//# sourceMappingURL=getAllUserFromDb.js.map