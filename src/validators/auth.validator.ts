import { z } from "zod";
import { VALIDATION_MESSAGES } from "../constants/validation-messages";

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, VALIDATION_MESSAGES.NAME.REQUIRED)
    .max(15, VALIDATION_MESSAGES.NAME.MAX)
    .regex(
      /^[A-Z][a-zA-Z]*(?: [A-Za-z]+)*$/,
      VALIDATION_MESSAGES.NAME.INVALID
    ),

  email: z
    .email(VALIDATION_MESSAGES.EMAIL.INVALID)
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(6, VALIDATION_MESSAGES.PASSWORD.MIN)
    .max(16, VALIDATION_MESSAGES.PASSWORD.MAX)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{6,16}$/,
      VALIDATION_MESSAGES.PASSWORD.INVALID
    ),
});

export const loginSchema = z.object({
  email: z
    .email(VALIDATION_MESSAGES.EMAIL.INVALID)
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(1, VALIDATION_MESSAGES.PASSWORD.REQUIRED),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;