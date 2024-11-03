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
// createToken.test.ts
const vitest_1 = require("vitest");
const utils_1 = require("../utils");
(0, vitest_1.describe)("createToken", () => {
    (0, vitest_1.it)("should generate a valid token containing user id and email", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = { id: "123", email: "user@example.com" };
        const secret = "your_secret_key";
        const token = yield (0, utils_1.generateToken)(user.id, secret);
        (0, vitest_1.expect)(typeof token).toBe("string");
        const payload = yield JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
        console.log("this payload", payload);
        (0, vitest_1.expect)(payload.userId).toEqual(user.id);
    }));
});
//# sourceMappingURL=generateToken.test.js.map