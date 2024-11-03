import { describe, it, expect, vi } from "vitest";
import { getUserById } from "../utils";

describe("getUserById", () => {
  it("should return undefined when an empty string is provided as userID", async () => {
    const result = await getUserById("");
    expect(result).toBeUndefined();
  });
});
