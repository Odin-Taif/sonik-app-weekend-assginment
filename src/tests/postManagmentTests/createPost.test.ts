import request from "supertest";
import http from "http";

import { readdir, unlink } from "fs";
import { join } from "path";
import { createApp } from "../../app";
const directory = `src/db/posts`;

describe("Create post tests", () => {
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

  it("create a post in local db", async () => {
    const response = await request(app)
      .post("/api/v1/post")
      .send({
        post: "this is a test post",
      })
      .expect(201);
  });
});
