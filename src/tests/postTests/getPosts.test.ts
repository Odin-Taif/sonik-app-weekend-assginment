import request from "supertest";
import http from "http";
import { createApp } from "../../app";

describe("The posts API", () => {
  const requsetPath = "/api/v1/posts";

  let server: http.Server;
  const app = createApp();

  beforeAll(() => {
    server = app.listen(0);
  });

  afterAll(() => {
    server.close();
  });

  it("Get all posts", async () => {
    const response = await request(app).get(requsetPath);

    // Assertions
    expect(response.status).toBe(200);
  });
});
