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
const app_1 = require("../app");
describe("post tests", () => {
    const app = (0, app_1.createApp)();
    // postRouter.get("/posts", verifyLogin, getPosts);
    // postRouter.post("/post", verifyLogin, createPost);
    // postRouter.patch("/posts/:id", verifyLogin, updatePost);
    // postRouter.delete("/posts/:id", verifyLogin, deletePost);
    // postRouter.get("/posts/:authorid", verifyLogin, getPostsByAuthor);
    const testUser = {
        name: "Test Johnson",
        email: "testest@example.com",
        password: "!fjasdfkjaAAfaidfo",
    };
    const testPost = {
        content: "this is a test post",
    };
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app).post("/api/v1/user").send(testUser);
    }));
    let token;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).post("/api/v1/login").send({
            email: testUser.email,
            password: testUser.password,
        });
        expect(res.status).toBe(200);
        token = res.body.token;
    }));
    it("GET/ should fetch all posts", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .get("/api/v1/posts")
            .set("Cookie", [`token=${token}`]);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("success", true);
    }));
    it("POST/ should create a post", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .post("/api/v1/post")
            .set("Cookie", [`token=${token}`])
            .send(testPost);
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("success", true);
    }));
    it("PATCH/:id should update a post", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseCreate = yield (0, supertest_1.default)(app)
            .post("/api/v1/post")
            .set("Cookie", [`token=${token}`])
            .send(testPost);
        expect(responseCreate.status).toBe(201);
        expect(responseCreate.body).toHaveProperty("success", true);
        const { post: { id }, } = responseCreate.body;
        const responseUpdate = yield (0, supertest_1.default)(app)
            .patch(`/api/v1/posts/:${id}`)
            .set("Cookie", [`token=${token}`])
            .send({
            content: "updated post",
        });
        expect(responseUpdate.status).toBe(200);
        expect(responseUpdate.body).toHaveProperty("success", true);
    }));
    it("DELETE/:id / should delete a post", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseCreate = yield (0, supertest_1.default)(app)
            .post("/api/v1/post")
            .set("Cookie", [`token=${token}`])
            .send(testPost);
        expect(responseCreate.status).toBe(201);
        expect(responseCreate.body).toHaveProperty("success", true);
        const { post: { id }, } = responseCreate.body;
        const responseDelete = yield (0, supertest_1.default)(app)
            .delete(`/api/v1/posts/:${id}`)
            .set("Cookie", [`token=${token}`]);
        expect(responseDelete.status).toBe(204);
    }));
    it("GET/:authorId / should fetch all posts for each author", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseCreate = yield (0, supertest_1.default)(app)
            .post("/api/v1/post")
            .set("Cookie", [`token=${token}`])
            .send(testPost);
        expect(responseCreate.status).toBe(201);
        expect(responseCreate.body).toHaveProperty("success", true);
        const { post: { authorId }, } = responseCreate.body;
        const responseGet = yield (0, supertest_1.default)(app)
            .get(`/api/v1/posts/:${authorId}`)
            .set("Cookie", [`token=${token}`]);
        expect(responseGet.status).toBe(200);
        expect(responseGet.body).toHaveProperty("posts");
    }));
});
//# sourceMappingURL=postsManagment.test.js.map