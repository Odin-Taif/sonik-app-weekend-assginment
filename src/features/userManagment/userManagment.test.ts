import request from "supertest";
import http from "http";
import { readdir, unlink } from "fs";
import { join } from "path";
import { createApp } from "../../app";
const directory = "src/features/userManagment/db/users";

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

  // userRouter.post("/user", createUser);

  // userRouter.get("/users", getUsers);

  // userRouter.post("/login", loginUser);

  it("create a user in local db", async () => {
    await request(app)
      .post("/api/v1/user")
      .send({
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "!fjasdfkjaAAfaidfo",
      })
      .expect(201);
  });

  it("Get all users", async () => {
    const response = await request(app).get("/api/v1/users");
    // Assertions
    expect(response.status).toBe(200);
  });

  it("create a user  => login to the new created user", async () => {
    await request(app)
      .post("/api/v1/user")
      .send({
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "!fjasdfkjaAAfaidfo",
      })
      .expect(201);
    await request(app)
      .post("/api/v1/login")
      .send({
        email: "alice.johnson@example.com",
        password: "!fjasdfkjaAAfaidfo",
      })
      .expect(200);
  });
});
