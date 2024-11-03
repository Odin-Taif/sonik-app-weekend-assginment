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
const supertest_1 = __importDefault(require("supertest"));
const assert_1 = __importDefault(require("assert"));
const fs_1 = require("fs");
const path_1 = require("path");
const app_1 = require("../app");
const directory = `src/db/users`;
describe("Create user tests", () => {
    let server;
    const app = (0, app_1.createApp)();
    function cleanCartsDb() {
        (0, fs_1.readdir)(directory, (err, files) => {
            if (err)
                throw err;
            for (const file of files) {
                (0, fs_1.unlink)((0, path_1.join)(directory, file), (e) => {
                    if (e)
                        throw e;
                });
            }
        });
    }
    beforeAll(() => {
        cleanCartsDb();
        server = app.listen(0);
    });
    afterAll(() => {
        server.close();
    });
    // userRouter.post("/user", createUser);
    // userRouter.get("/users", getUsers);
    // userRouter.get("/users/:id", getUser);
    // userRouter.post("/login", loginUser);
    it("create a user in local db", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .post("/api/v1/user")
            .send({
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            password: "!fjasdfkjaAAfaidfo",
        })
            .expect(201);
        const { text, headers: { location }, } = response;
        const { user } = JSON.parse(text);
        assert_1.default.equal(location, `/api/v1/users/${user.id}`);
    }));
    it("Get all users", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/api/v1/users");
        // Assertions
        expect(response.status).toBe(200);
    }));
    it("log in a user => create a user  => login to the new created user", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseCreated = yield (0, supertest_1.default)(app)
            .post("/api/v1/user")
            .send({
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            password: "!fjasdfkjaAAfaidfo",
        })
            .expect(201);
        const responseLogin = yield (0, supertest_1.default)(app).post("/api/v1/login").send({
            email: "alice.johnson@example.com",
            password: "!fjasdfkjaAAfaidfo",
        });
        expect(responseLogin.status).toBe(200);
    }));
    it("get single user | create a user => get the id => get the newly created user", () => __awaiter(void 0, void 0, void 0, function* () {
        const response0 = yield (0, supertest_1.default)(server)
            .post("/api/v1/user")
            .send({
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            password: "!fjasdfkjaAAfaidfo",
        })
            .expect(201);
        const { text } = response0;
        const { user } = JSON.parse(text);
        const response1 = yield (0, supertest_1.default)(app).get(`/api/v1/users/${user.id}`);
        // Assertions
        expect(response1.status).toBe(200);
    }));
});
//# sourceMappingURL=userManagment.test.js.map