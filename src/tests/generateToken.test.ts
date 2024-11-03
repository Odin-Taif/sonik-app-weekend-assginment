// createToken.test.ts
import { describe, it, expect } from "vitest";
import { generateToken } from "../utils";

describe("createToken", () => {
  it("should generate a valid token containing user id and email", async () => {
    const user = { id: "123", email: "user@example.com" };
    const secret = "your_secret_key";

    const token = await generateToken(user.id, secret);

    expect(typeof token).toBe("string");

    const payload = await JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
    console.log("this payload", payload);
    expect(payload.userId).toEqual(user.id);
  });
});
