import request from "supertest";
import http from "http";

import assert from "assert";
import { readdir, unlink } from "fs";
import { join } from "path";
import { createApp } from "../app";
const directory = `src/db/users`;

describe("Create user tests", () => {
  let server: http.Server;
  const app = createApp();
  const requsetPath = "/api/v1/users";
  function cleanCartsDb() {
    readdir(directory, (err: any, files: any) => {
      if (err) throw err;
      for (const file of files) {
        unlink(join(directory, file), (e) => {
          if (e) throw e;
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
  // userRouter.post("/login", loginUser);
  // userRouter.get("/users", getUsers);
  // userRouter.get("/users/:id", getUser);

  it("create a user in local db", async () => {
    const response = await request(app)
      .post("/api/v1/user")
      .send({
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "!fjasdfkjaAAfaidfo",
      })
      .expect(201);

    const {
      text,
      headers: { location },
    } = response;

    const { user } = JSON.parse(text);
    assert.equal(location, `/api/v1/users/${user.id}`);
  });

  it("Get all users", async () => {
    const response = await request(app).get(requsetPath);
    // Assertions
    expect(response.status).toBe(200);
  });

  it("get single user | create a user => get the id => get the newly created user", async () => {
    const response0 = await request(server)
      .post("/api/v1/user")
      .send({
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "!fjasdfkjaAAfaidfo",
      })
      .expect(201);

    const { text } = response0;
    const { user } = JSON.parse(text);

    const response1 = await request(app).get(`/api/v1/users/${user.id}`);
    // Assertions
    expect(response1.status).toBe(200);
  });
});
