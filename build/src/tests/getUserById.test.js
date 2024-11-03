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
const vitest_1 = require("vitest");
const utils_1 = require("../utils");
(0, vitest_1.describe)("getUserById", () => {
    (0, vitest_1.it)("should return undefined when an empty string is provided as userID", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, utils_1.getUserById)("");
        (0, vitest_1.expect)(result).toBeUndefined();
    }));
});
//# sourceMappingURL=getUserById.test.js.map