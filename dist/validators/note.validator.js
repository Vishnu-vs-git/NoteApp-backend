import { z } from "zod";
import { VALIDATION_MESSAGES } from "../constants/validation-messages";
export const createNoteSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, VALIDATION_MESSAGES.NOTE.TITLE_REQUIRED)
        .max(200, VALIDATION_MESSAGES.NOTE.TITLE_MAX),
    content: z.string().optional().default(""),
});
export const updateNoteSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, VALIDATION_MESSAGES.NOTE.TITLE_REQUIRED)
        .max(200, VALIDATION_MESSAGES.NOTE.TITLE_MAX)
        .optional(),
    content: z.string().optional(),
});
//# sourceMappingURL=note.validator.js.map