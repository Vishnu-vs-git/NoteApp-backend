export declare const MESSAGES: {
    readonly AUTH_MESSAGES: {
        readonly EMAIL_ALREADY_EXISTS: "Email already exists";
        readonly INVALID_CREDENTIALS: "Invalid email or password";
        readonly LOGIN_SUCCESS: "Login successful";
        readonly REGISTER_SUCCESS: "User registered successfully";
        readonly LOGOUT_SUCCESS: "Logout successful";
        readonly UNAUTHORIZED: "Unauthorized";
        readonly FORBIDDEN: "Forbidden";
        readonly INVALID_TOKEN: "Invalid token";
        readonly ACCESS_TOKEN_REFRESHED: "Access token refreshed successfully";
    };
    readonly USER_MESSAGES: {
        readonly USER_NOT_FOUND: "User not found";
    };
    readonly NOTE_MESSAGES: {
        readonly CREATE_SUCCESS: "Note created successfully";
        readonly UPDATE_SUCCESS: "Note updated successfully";
        readonly DELETE_SUCCESS: "Note deleted successfully";
        readonly FETCH_SUCCESS: "Notes fetched successfully";
        readonly NOT_FOUND: "Note not found or unauthorized";
        readonly UNAUTHORIZED_ACCESS: "You are not authorized to access this note";
    };
    readonly GENERAL_MESSAGES: {
        readonly INTERNAL_SERVER_ERROR: "Internal server error";
    };
    readonly CONFIG: {
        readonly ACCESS_TOKEN_SECRET_MISSING: "ACCESS_TOKEN_SECRET is missing";
        readonly REFRESH_TOKEN_SECRET_MISSING: "REFRESH_TOKEN_SECRET is missing";
        readonly MONGO_URI_MISSING: "MONGO_URI is missing";
    };
};
//# sourceMappingURL=message.d.ts.map