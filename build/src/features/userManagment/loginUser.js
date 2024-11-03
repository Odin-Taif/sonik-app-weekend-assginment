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
exports.loginUser = void 0;
const zod_validation_1 = require("../../validation/zod-validation");
const utils_1 = require("../../utils");
const bcryptjs_1 = require("bcryptjs");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userValidated = zod_validation_1.signinUserSchema.safeParse(req.body);
    if (!userValidated.success) {
        res.status(400).json({
            success: false,
            msg: "Please check your Email or Password!",
        });
    }
    const { email, password } = userValidated.data;
    try {
        const existingUser = yield (0, utils_1.getUserByEmail)(email);
        if (!existingUser) {
            res.status(400).json({
                success: false,
                msg: "User does not exist!",
            });
        }
        const validPassword = (0, bcryptjs_1.compareSync)(password, existingUser.hashedPassword);
        if (!validPassword) {
            res.status(400).json({ success: false, msg: "Incorrect password!" });
        }
        const SECRET_KEY = process.env.SECRET_KEY;
        const token = yield (0, utils_1.generateToken)(existingUser.id, SECRET_KEY);
        (0, utils_1.setTokenCookie)(res, token);
        res.status(200).json({
            success: true,
            msg: "User logged in successfully",
            user: existingUser,
            token: token,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=loginUser.js.map