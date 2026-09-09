import { AppError } from "../errors/app-error";
import { HTTP_STATUS } from "../constants/http-status";
import { MESSAGES } from "../constants/message";
export const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statuscode).json({
            success: false,
            message: err.message,
        });
    }
    console.error(err);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: MESSAGES.GENERAL_MESSAGES.INTERNAL_SERVER_ERROR,
    });
};
//# sourceMappingURL=error-handler.middleware.js.map