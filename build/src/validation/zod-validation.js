"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDeletePostSchema = exports.createPostSchema = exports.signinUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const idShecma = zod_1.z.any();
const nameSchema = zod_1.z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(40, "Name must be at most 40 characters long");
const emailSchema = zod_1.z.string().email("Correct email is required");
const passwordSchema = zod_1.z
    .string()
    .trim()
    .min(8, "Your password should be at least 8 characters!")
    .max(40, "Your password should be at most 40 characters!")
    .refine((val) => /[A-Z]/.test(val), "Your password must contain at least one uppercase letter!")
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), "Your password must contain at least one special character!");
const postSchema = zod_1.z.string().trim().min(1).max(1000);
exports.createUserSchema = zod_1.z.object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
});
exports.signinUserSchema = zod_1.z.object({
    email: emailSchema,
    password: passwordSchema,
});
exports.createPostSchema = zod_1.z.object({
    content: postSchema,
});
exports.updateDeletePostSchema = zod_1.z.object({
    id: idShecma,
});
//# sourceMappingURL=zod-validation.js.map