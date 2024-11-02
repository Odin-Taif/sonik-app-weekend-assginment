import request from "supertest";
import http from "http";
import { createApp } from "../../app";

describe("The Users API", () => {
  let server: http.Server;
  const app = createApp();
  beforeAll(() => {
    server = app.listen(0);
  });

  afterAll(() => {
    server.close();
  });

  it("get single user | create a user => get the id => get the newly created user", async () => {
    const response0 = await request(server)
      .post("/api/v1/user")
      .send({
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 28,
      })
      .expect(201);

    const { text } = response0;
    const { user } = JSON.parse(text);

    const response1 = await request(app).get(`/api/v1/users/${user.id}`);
    // Assertions
    expect(response1.status).toBe(200);
  });
});
