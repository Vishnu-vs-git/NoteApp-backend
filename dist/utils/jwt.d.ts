import { JwtPayload } from "jsonwebtoken";
interface AccessTokenPayload {
    userId: string;
    email: string;
}
interface RefreshTokenPayload {
    userId: string;
    email: string;
}
export declare const generateAccessToken: (payload: AccessTokenPayload) => string;
export declare const generateRefreshToken: (payload: RefreshTokenPayload) => string;
export declare const verifyAccessToken: (token: string) => JwtPayload | string;
export declare const verifyRefreshToken: (token: string) => JwtPayload | string;
export {};
//# sourceMappingURL=jwt.d.ts.map