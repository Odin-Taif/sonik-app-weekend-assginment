"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("./routes");
function createApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.json());
    app.get("/status", (req, res) => {
        res.json({ status: "ready" });
    });
    app.use("/api/v1", routes_1.userRouter);
    app.use("/api/v1", routes_1.postRouter);
    return app;
}
//# sourceMappingURL=app.js.map