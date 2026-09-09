export const VALIDATION_MESSAGES = {
  NAME: {
    REQUIRED: "Name is required",
    MIN: "Name is required",
    MAX: "Name cannot exceed 15 characters",
    INVALID:
      "Name must start with a capital letter, contain only letters with single spaces, and no numbers (max 15 characters)",
  },
  EMAIL: {
    REQUIRED: "Email is required",
    INVALID: "Invalid email address",
  },
  PASSWORD: {
    REQUIRED: "Password is required",
    MIN: "Password must be at least 6 characters",
    MAX: "Password cannot exceed 16 characters",
    INVALID:
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
  },
  NOTE: {
    TITLE_REQUIRED: "Note title is required",
    TITLE_MAX: "Title cannot exceed 200 characters",
    CONTENT_REQUIRED: "Note content is required",
  },
} as const;