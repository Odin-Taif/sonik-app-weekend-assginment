import { describe, it, expect, vi } from "vitest";
import { getUserByEmail } from "../utils";

describe("getUserByEmail", () => {
  it("should return undefined when an empty string is provided as email", async () => {
    const result = await getUserByEmail("");
    expect(result).toBeUndefined();
  });
});
