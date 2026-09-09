import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { MESSAGES } from "../constants/message";
export const generateAccessToken = (payload) => {
    if (!env.ACCESS_TOKEN_SECRET) {
        throw new Error(MESSAGES.CONFIG.ACCESS_TOKEN_SECRET_MISSING);
    }
    return jwt.sign(payload, env.ACCESS_TOKEN_SECRET, {
        expiresIn: env.ACCESS_TOKEN_EXPIRES_IN,
    });
};
export const generateRefreshToken = (payload) => {
    if (!env.REFRESH_TOKEN_SECRET) {
        throw new Error(MESSAGES.CONFIG.REFRESH_TOKEN_SECRET_MISSING);
    }
    return jwt.sign(payload, env.REFRESH_TOKEN_SECRET, {
        expiresIn: env.REFRESH_TOKEN_EXPIRES_IN,
    });
};
export const verifyAccessToken = (token) => {
    if (!env.ACCESS_TOKEN_SECRET) {
        throw new Error(MESSAGES.CONFIG.ACCESS_TOKEN_SECRET_MISSING);
    }
    return jwt.verify(token, env.ACCESS_TOKEN_SECRET);
};
export const verifyRefreshToken = (token) => {
    if (!env.REFRESH_TOKEN_SECRET) {
        throw new Error(MESSAGES.CONFIG.REFRESH_TOKEN_SECRET_MISSING);
    }
    return jwt.verify(token, env.REFRESH_TOKEN_SECRET);
};
//# sourceMappingURL=jwt.js.map