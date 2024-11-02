import request from "supertest";
import http from "http";
import { createApp } from "../app";

describe("The Users API", () => {
  let server: http.Server;
  const app = createApp();
  beforeAll(() => {
    server = app.listen(0);
  });

  afterAll(() => {
    server.close();
  });

  it("create a user  in db", async () => {
    const response = await request(app).get("/status");
    // Assertions
    expect(response.status).toBe(200);
  });
});
