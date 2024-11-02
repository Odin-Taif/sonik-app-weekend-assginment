import { z } from "zod";

const idShecma = z.any();
const nameSchema = z
  .string()
  .trim()
  .min(3, "Name must be at least 3 characters long")
  .max(40, "Name must be at most 40 characters long");

const emailSchema = z.string().email("Correct email is required");

const passwordSchema = z
  .string()
  .trim()
  .min(8, "Your password should be at least 8 characters!")
  .max(40, "Your password should be at most 40 characters!")
  .refine(
    (val) => /[A-Z]/.test(val),
    "Your password must contain at least one uppercase letter!"
  )
  .refine(
    (val) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
    "Your password must contain at least one special character!"
  );

const postSchema = z.string().trim().min(1).max(400);

export const createUserSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});
export const signinUserSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const createPostSchema = z.object({
  post: postSchema,
});
