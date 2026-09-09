import { AppError } from "../errors/app-error";
import { HTTP_STATUS } from "../constants/http-status";
export const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return next(new AppError(HTTP_STATUS.BAD_REQUEST, "Validation failed", result.error.issues));
        }
        req.body = result.data;
        next();
    };
};
//# sourceMappingURL=validate.middleware.js.map