import request from "supertest";
import http from "http";
import { createApp } from "../../app";

describe("The Post API", () => {
  let server: http.Server;
  const app = createApp();
  beforeAll(() => {
    server = app.listen(0);
  });

  afterAll(() => {
    server.close();
  });

  it("get single post | create a post => get the id => get the newly created post", async () => {
    const response0 = await request(server)
      .post("/api/v1/post")
      .send({
        post: "This is a test post",
      })
      .expect(201);

    const { text } = response0;
    const { post } = JSON.parse(text);

    const response1 = await request(app).get(`/api/v1/posts/${post.id}`);
    // Assertions
    expect(response1.status).toBe(200);
  });
});
