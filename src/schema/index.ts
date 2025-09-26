import * as z from "zod";

export const userNameSchema = z
  .string()
  .min(3, { message: "Username is required" })
  .max(20, { message: "username must be less than 20 char" })
  .regex(/^[a-zA-Z0-9._]{3,20}$/, { message: "Invalid username" });

export const signUpSchema = z.object({
  username: userNameSchema,
  email: z.string().email().min(4, { message: "Invalid email" }),
  password: z.string().min(6, { message: "password should be atleast 6 characters" }),
});
export const signInSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "content should be atleast 10 characters" })
    .max(1000, { message: "conent should be less than 1000 characters" }),
});

export const verifySchema = z.object({
  code: z.string().min(6, { message: "Verify code is atleast 6 characters" }),
});

export const accpectionMessageSchema = z.object({
  accpectMessage: z.boolean(),
});

export const credentailSchema = z.object({
  username : userNameSchema,
  email: z.string(),
});
