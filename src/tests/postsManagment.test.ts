import request from "supertest";
import { createApp } from "../app";

describe("post tests", () => {
  const app = createApp();

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

  it("should fetch all posts", async () => {
    const res = await request(app)
      .get("/api/v1/posts")
      .set("Cookie", [`token=${token}`]);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("success", true);
  });
  it("should create a post", async () => {
    const res = await request(app)
      .post("/api/v1/post")
      .set("Cookie", [`token=${token}`])
      .send(testPost);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("success", true);
  });

  it("should update a post", async () => {
    const responseCreate = await request(app)
      .post("/api/v1/post")
      .set("Cookie", [`token=${token}`])
      .send(testPost);
    expect(responseCreate.status).toBe(201);
    expect(responseCreate.body).toHaveProperty("success", true);
    console.log(responseCreate.body.post);
    const {
      post: { id },
    } = responseCreate.body;
    console.log(id);
    const responseUpdate = await request(app)
      .patch(`/api/v1/posts/:${id}`)
      .set("Cookie", [`token=${token}`])
      .send({
        content: "updated post",
      });
    expect(responseUpdate.status).toBe(200);
    expect(responseUpdate.body).toHaveProperty("success", true);
  });
});
