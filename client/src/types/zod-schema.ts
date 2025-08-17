import { z } from "zod";

export const RegisterUserFormSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "minimum 3 character required")
    .max(10, "max limit reached"),
  email: z
    .email()
    .trim()
    .endsWith("com")
    .min(5, "atleast 5 character required")
    .max(20, "max limit reached"),
  password: z
    .string()
    .trim()
    .min(3, "minimum 3 character required")
    .max(10, "max limit reached"),
  avatar_url: z.url().trim(),
  role: z.enum(["ADMIN", "USER"]).default("USER"),
  isVerified: z.boolean().default(false),
});

export type RegisterFormType = z.infer<typeof RegisterUserFormSchema>;

export const LoginUserFormSchema = RegisterUserFormSchema.pick({
  email: true,
  password: true,
});

export type LoginFormType = z.infer<typeof LoginUserFormSchema>;
