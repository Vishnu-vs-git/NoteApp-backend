export class AppError extends Error {
    statuscode;
    errors;
    constructor(statuscode, message, errors) {
        super(message);
        this.statuscode = statuscode;
        this.errors = errors;
        this.name = "AppError";
    }
}
//# sourceMappingURL=app-error.js.map