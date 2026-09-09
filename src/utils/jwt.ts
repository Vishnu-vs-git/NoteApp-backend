import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

import { env } from "../config/env";
import { MESSAGES } from "../constants/message";




interface AccessTokenPayload {
  userId: string;
  email: string
}

interface RefreshTokenPayload {
  userId: string;
  email:string;
}

export const generateAccessToken = (
  payload: AccessTokenPayload
): string => {
  if (!env.ACCESS_TOKEN_SECRET) {
    throw new Error(MESSAGES.CONFIG.ACCESS_TOKEN_SECRET_MISSING);
  }

  return jwt.sign(payload, env.ACCESS_TOKEN_SECRET, {
   expiresIn: env.ACCESS_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
  });
};

export const generateRefreshToken = (
  payload: RefreshTokenPayload
): string => {
  if (!env.REFRESH_TOKEN_SECRET) {
    throw new Error(MESSAGES.CONFIG.REFRESH_TOKEN_SECRET_MISSING);
  }

  return jwt.sign(payload, env.REFRESH_TOKEN_SECRET, {
     expiresIn: env.REFRESH_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
  });
};

export const verifyAccessToken = (
  token: string
): JwtPayload | string => {
  if (!env.ACCESS_TOKEN_SECRET) {
    throw new Error(MESSAGES.CONFIG.ACCESS_TOKEN_SECRET_MISSING);
  }

  return jwt.verify(token, env.ACCESS_TOKEN_SECRET);
};

export const verifyRefreshToken = (
  token: string
): JwtPayload | string => {
  if (!env.REFRESH_TOKEN_SECRET) {
    throw new Error(MESSAGES.CONFIG.REFRESH_TOKEN_SECRET_MISSING);
  }

  return jwt.verify(token, env.REFRESH_TOKEN_SECRET);
};