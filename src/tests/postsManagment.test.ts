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
    password: "!AfjassdfdfdfAo",
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

  it("GET/ should fetch all posts", async () => {
    const res = await request(app)
      .get("/api/v1/posts")
      .set("Cookie", [`token=${token}`]);
    expect(res.status).toBe(200);
  });
  it("POST/ should create a post", async () => {
    const res = await request(app)
      .post("/api/v1/post")
      .set("Cookie", [`token=${token}`])
      .send(testPost);
    expect(res.status).toBe(201);
  });

  it("PATCH/:id should update a post", async () => {
    const responseCreate = await request(app)
      .post("/api/v1/post")
      .set("Cookie", [`token=${token}`])
      .send(testPost);
    expect(responseCreate.status).toBe(201);

    const postId = responseCreate.body.id;

    const responseUpdate = await request(app)
      .patch(`/api/v1/posts/:${postId}`)
      .set("Cookie", [`token=${token}`])
      .send({
        content: "updated post",
      });
    expect(responseUpdate.status).toBe(200);
    expect(responseUpdate.body).toHaveProperty("success", true);
  });

  it("DELETE/:id / should delete a post", async () => {
    const responseCreate = await request(app)
      .post("/api/v1/post")
      .set("Cookie", [`token=${token}`])
      .send(testPost);
    expect(responseCreate.status).toBe(201);
    const postId = responseCreate.body.id;
    const responseDelete = await request(app)
      .delete(`/api/v1/posts/:${postId}`)
      .set("Cookie", [`token=${token}`]);
    expect(responseDelete.status).toBe(204);
  });

  it("GET/:authorId / should fetch all posts for each author", async () => {
    const responseCreate = await request(app)
      .post("/api/v1/post")
      .set("Cookie", [`token=${token}`])
      .send(testPost);
    expect(responseCreate.status).toBe(201);
    const authorId = responseCreate.body.authoId;
    const responseGet = await request(app)
      .get(`/api/v1/posts/:${authorId}`)
      .set("Cookie", [`token=${token}`]);
    expect(responseGet.status).toBe(200);
    expect(responseGet.body).toHaveProperty("posts");
  });
});
