import request from "supertest";
import { createApp } from "../app";

describe("post tests", () => {
  const app = createApp();

  // postRouter.post("/post", verifyLogin, createPost);
  // postRouter.get("/posts", verifyLogin, getPosts);
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

  beforeAll(async () => {
    await request(app).post("/api/v1/user").send(testUser);
  });

  let token: string;
  beforeEach(async () => {
    const res = await request(app).post("/api/v1/login").send({
      email: testUser.email,
      password: testUser.password,
    });
    expect(res.status).toBe(200);
    token = res.body.token;
  });
  //  we first create a user => login the users => get the token => create post with token included in the req.cookies=> fetch post

  it("should create a post", async () => {
    console.log(token);
    const res = await request(app)
      .post("/api/v1/post")
      .set("Cookie", [`token=${token}`])
      .send(testPost);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("success", true);
  });

  it("should fetch all posts", async () => {
    console.log(token);
    const res = await request(app)
      .get("/api/v1/posts")
      .set("Cookie", [`token=${token}`]);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("success", true);
  });
});
