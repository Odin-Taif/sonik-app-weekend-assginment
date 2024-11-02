import request from "supertest";
import http from "http";
import { createApp } from "../app";
import assert from "assert";
import { readdir, unlink } from "fs";
import { join } from "path";
import { User } from "../../types";
const directory = `src/db/users`;

describe("Create user tests", () => {
  let server: http.Server;
  const app = createApp();

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

  it("create a user in local db", async () => {
    const response = await request(app)
      .post("/api/v1/user")
      .send({
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 28,
      })
      .expect(201);

    const {
      text,
      headers: { location },
    } = response;

    const { user } = JSON.parse(text);
    assert.equal(location, `/api/v1/users/${user.id}`);
  });
});
