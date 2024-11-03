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
exports.createUser = void 0;
const uuid_1 = require("uuid");
const bcryptjs_1 = require("bcryptjs");
const utils_1 = require("../../utils");
const zod_validation_1 = require("../../validation/zod-validation");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userValidated = zod_validation_1.createUserSchema.safeParse(req.body);
    if (!userValidated.success) {
        res.status(400).json({ success: false, message: "Input not valid!" });
    }
    const id = (0, uuid_1.v4)();
    const { name, email, password } = userValidated.data;
    const hashedPassword = (0, bcryptjs_1.hashSync)(password, 10);
    try {
        const newUser = { id, name, email, hashedPassword };
        const usersDir = process.env.usersDbDir || "src/db/users";
        yield (0, utils_1.createNewUserInDb)(newUser, usersDir);
        res
            .status(201)
            .header("location", `/api/v1/users/${id}`)
            .json({ success: true, msg: "User created successfully", user: newUser });
    }
    catch (error) {
        res.json({ success: false, msg: "User is invalid", error: error });
        throw error;
    }
});
exports.createUser = createUser;
//# sourceMappingURL=createUser.js.map