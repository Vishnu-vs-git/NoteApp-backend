export declare const VALIDATION_MESSAGES: {
    readonly NAME: {
        readonly REQUIRED: "Name is required";
        readonly MIN: "Name is required";
        readonly MAX: "Name cannot exceed 15 characters";
        readonly INVALID: "Name must start with a capital letter, contain only letters with single spaces, and no numbers (max 15 characters)";
    };
    readonly EMAIL: {
        readonly REQUIRED: "Email is required";
        readonly INVALID: "Invalid email address";
    };
    readonly PASSWORD: {
        readonly REQUIRED: "Password is required";
        readonly MIN: "Password must be at least 6 characters";
        readonly MAX: "Password cannot exceed 16 characters";
        readonly INVALID: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character";
    };
    readonly NOTE: {
        readonly TITLE_REQUIRED: "Note title is required";
        readonly TITLE_MAX: "Title cannot exceed 200 characters";
        readonly CONTENT_REQUIRED: "Note content is required";
    };
};
//# sourceMappingURL=validation-messages.d.ts.map