export const VALIDATION_MESSAGES = {
  NAME: {
    REQUIRED: "Name is required",
    MIN: "Name must be at least 3 characters",
    MAX: "Name cannot exceed 50 characters",
    INVALID:
      "Name must start with a capital letter and contain only letters with single spaces",
  },
  EMAIL: {
    REQUIRED: "Email is required",
    INVALID: "Invalid email address",
  },
  PASSWORD: {
    REQUIRED: "Password is required",
    MIN: "Password must be at least 8 characters",
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