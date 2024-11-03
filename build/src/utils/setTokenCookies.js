"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTokenCookie = void 0;
const setTokenCookie = (res, token) => {
    res.cookie("token", token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        // sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });
};
exports.setTokenCookie = setTokenCookie;
//# sourceMappingURL=setTokenCookies.js.map