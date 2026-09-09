import { env } from "../config/env";
export const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "lax",
};
//# sourceMappingURL=cookie.options.js.map