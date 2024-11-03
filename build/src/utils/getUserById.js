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
exports.getUserById = void 0;
const index_1 = require("./index");
const getUserById = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    const usersDir = process.env.usersDbDir || "src/db/users";
    const users = yield (0, index_1.getUsersFromDb)(usersDir);
    const user = users.find((user) => user.id === userID);
    return user;
});
exports.getUserById = getUserById;
//# sourceMappingURL=getUserById.js.map