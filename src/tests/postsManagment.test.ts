import request from "supertest";
import { createApp } from "../app";

describe("Create post tests", () => {
  const app = createApp();

  describe("POST /api/v1/post", () => {
    const testPost = {
      content: "this s a test post",
    };
    // Test for signup | done
    it("should create a post", async () => {
      const res = await request(app).post("/api/v1/post").send(testPost);
      expect(res.status).toBe(201); // Assuming 201 Created
      expect(res.body).toHaveProperty("success", true);
    });
  });
});
