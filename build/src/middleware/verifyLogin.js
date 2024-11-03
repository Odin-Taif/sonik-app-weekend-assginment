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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({
            success: false,
            msg: "Unauthorized user! Please log in first!",
        });
    }
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        if (!decodedToken) {
            res
                .status(403)
                .json({ success: false, message: "Invalid Token provied" });
        }
        req.userId = decodedToken.userId;
        next();
    }
    catch (error) {
        res.status(500).json({ success: false, msg: "Server Error" });
    }
});
exports.verifyLogin = verifyLogin;
//# sourceMappingURL=verifyLogin.js.map