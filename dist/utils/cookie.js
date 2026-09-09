import { env } from "../config/env";
import { COOKIE_OPTIONS } from "../constants/cookie.options";
import { TokenType } from "../constants/token-enum";
export const setAuthCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken", accessToken, {
        ...COOKIE_OPTIONS,
        maxAge: Number(env.ACCESS_TOKEN_MAX_AGE),
    });
    res.cookie("refreshToken", refreshToken, {
        ...COOKIE_OPTIONS,
        maxAge: Number(env.REFRESH_TOKEN_MAX_AGE),
    });
};
export const clearAuthCookies = (res) => {
    res.clearCookie(TokenType.ACCESS, COOKIE_OPTIONS);
    res.clearCookie(TokenType.REFRESH, COOKIE_OPTIONS);
};
//# sourceMappingURL=cookie.js.map