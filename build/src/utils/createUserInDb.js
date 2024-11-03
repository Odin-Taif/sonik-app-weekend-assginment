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
exports.createNewUserInDb = void 0;
const promises_1 = require("fs/promises");
require("dotenv/config");
const createNewUserInDb = (_a, usersDir_1) => __awaiter(void 0, [_a, usersDir_1], void 0, function* ({ id, name, email, hashedPassword }, usersDir) {
    yield (0, promises_1.writeFile)(`${usersDir}/${id}`, JSON.stringify({ id, name, email, hashedPassword }));
});
exports.createNewUserInDb = createNewUserInDb;
//# sourceMappingURL=createUserInDb.js.map