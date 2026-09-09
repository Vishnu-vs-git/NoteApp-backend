import { HTTP_STATUS } from "../constants/http-status";
import { MESSAGES } from "../constants/message";
import { verifyAccessToken } from "../utils/jwt";
import { TokenType } from "../constants/token-enum";
import { AppError } from "../errors/app-error";
export const authenticate = (req, res, next) => {
    try {
        const token = req.cookies[TokenType.ACCESS];
        if (!token) {
            throw new AppError(HTTP_STATUS.UNAUTHORIZED, MESSAGES.AUTH_MESSAGES.UNAUTHORIZED);
        }
        const payload = verifyAccessToken(token);
        if (typeof payload === "string" ||
            !("userId" in payload)) {
            throw new AppError(HTTP_STATUS.UNAUTHORIZED, MESSAGES.AUTH_MESSAGES.UNAUTHORIZED);
        }
        req.user = {
            userId: payload.userId,
            email: payload.email,
        };
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=auth.middleware.js.map