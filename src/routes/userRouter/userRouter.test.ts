import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import assert from "assert";
import { createApp } from "../../app";
import http from "http";

describe("The Users API", () => {
  let server: http.Server;
  const app = createApp();
  beforeAll(() => {
    server = app.listen(0);
  });

  afterAll(() => {
    server.close();
  });

  it("Get all Users", async () => {
    const response = await request(app).get("/api/v1/users");
    // Assertions
    expect(response.status).toBe(200);
  });
});
